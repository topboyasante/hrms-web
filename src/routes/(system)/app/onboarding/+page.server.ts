import axiosfn from '$lib/axios.js';
import { CompleteOnboardingSchema } from '$lib/schema/auth/auth.schema';
import { fail, redirect } from '@sveltejs/kit';
import { AxiosError } from 'axios';
import { ZodError } from 'zod';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const formEntries = Object.fromEntries(form);
		const token = cookies.get('hrms_auth');

		try {
			const { first_name, last_name, company_name, company_code } =
				CompleteOnboardingSchema.parse(formEntries);

			await axiosfn.post(
				'/auth/complete-onboarding',
				{ first_name, last_name, company_name, company_code },
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			);
		} catch (error) {
			const { first_name, last_name, company_code, company_name } = formEntries;
			if (error instanceof ZodError) {
				// Handle Validation Errors from Zod
				const errors = error.errors.reduce(
					(acc, err) => {
						const field = err.path[0];
						acc[field] = err.message;
						return acc;
					},
					{} as Record<string, string>
				);

				return fail(400, {
					first_name,
					last_name,
					company_code,
					company_name,
					errors
				});
			} else if (error instanceof AxiosError) {
				// Handle API Errors from the backend
				const { first_name, last_name, company_code, company_name } = formEntries;

				return fail(400, {
					first_name,
					last_name,
					company_code,
					company_name,
					errors: {
						first_name: '',
						last_name: '',
						company_code: '',
						company_name: '',
						api: error.response?.data.message || 'There was an error with your request'
					}
				});
			} else {
				return fail(400, {
					first_name,
					last_name,
					company_code,
					company_name,
					errors: {
						first_name: '',
						last_name: '',
						company_code: '',
						company_name: '',
						api: 'There was an error with your request'
					}
				});
			}
		}

		throw redirect(302, '/app/jobs');
	}
};
