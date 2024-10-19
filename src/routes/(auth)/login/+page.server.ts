import { fail, redirect } from '@sveltejs/kit';
import axiosfn from '$lib/axios.js';
import type { Actions } from './$types';
import { env } from 'process';
import { AuthSchema } from '$lib/schema/auth/auth.schema';
import { ZodError } from 'zod';
import { AxiosError } from 'axios';

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const form = await request.formData();
		const formEntries = Object.fromEntries(form);

		try {
			const { email, password } = AuthSchema.parse(formEntries);

			const res = await axiosfn.post('/auth/login', { email, password });
			const accessToken = res.data.access_token;
			const refreshToken = res.data.refresh_token;

			cookies.set('hrms_auth', accessToken, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24
			});

			cookies.set('hrms_refresh', refreshToken, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24
			});
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
						password: '',
						api: error.response?.data.message || 'There was an error with your request'
					}
				});
			} else {
				return fail(400, {
					email: typeof email === 'string' ? email : '',
					errors: { email: '', password: '', api: 'There was an error with your request' }
				});
			}
		}

		throw redirect(302, '/app/jobs');
	}
};
