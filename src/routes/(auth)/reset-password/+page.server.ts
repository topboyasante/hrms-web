import axiosfn from '$lib/axios.js';
import { ResetPasswordSchema } from '$lib/schema/auth/auth.schema';
import { fail, redirect } from '@sveltejs/kit';
import { AxiosError } from 'axios';
import toast from 'svelte-french-toast';
import { ZodError } from 'zod';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, url }) => {
		let email = url.searchParams.get('email');
		let token = url.searchParams.get('token');

		if (!email || !token) {
			return fail(400, { message: 'Email or token is missing' });
		}

		const form = await request.formData();
		const formEntries = Object.fromEntries(form);

		try {
			const { password, confirm_password } = ResetPasswordSchema.parse(formEntries);

			await axiosfn.post('/auth/reset-password', { email, password, confirm_password, token });

			toast.success('Your password was reset successfully.');
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
					errors
				});
			} else if (error instanceof AxiosError) {
				// Handle API Errors from the backend
				return fail(400, {
					errors: {
						password: '',
						confirm_password: '',
						api: error.response?.data.message || 'There was an error with your request'
					}
				});
			} else {
				return fail(400, {
					email: typeof email === 'string' ? email : '',
					errors: {
						password: '',
						confirm_password: '',
						api: 'There was an error with your request'
					}
				});
			}
		}

		throw redirect(302, '/login');
	}
};
