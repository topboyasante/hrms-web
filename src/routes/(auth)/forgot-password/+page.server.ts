import axiosfn from '$lib/axios.js';
import { ForgotPasswordSchema } from '$lib/schema/auth/auth.schema';
import { fail } from '@sveltejs/kit';
import { AxiosError } from 'axios';
import { ZodError } from 'zod';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const formEntries = Object.fromEntries(form);

		try {
			const { email } = ForgotPasswordSchema.parse(formEntries);

			const res = await axiosfn.post('/auth/forgot-password', { email });

			return {
				success: res.data.message
			};
		} catch (error) {
			const { email } = formEntries;
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
					email: typeof email === 'string' ? email : '',
					errors
				});
			} else if (error instanceof AxiosError) {
				// Handle API Errors from the backend
				return fail(400, {
					email: typeof email === 'string' ? email : '',
					errors: {
						email: '',
						api: error.response?.data.message || 'There was an error with your request'
					}
				});
			} else {
				return fail(400, {
					email: typeof email === 'string' ? email : '',
					errors: { email: '', api: 'There was an error with your request' }
				});
			}
		}
	}
};
