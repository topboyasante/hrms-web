import axiosfn from '$lib/axios';
import type { IUser } from '$lib/types/auth.js';
import { redirect } from '@sveltejs/kit';

export async function load({ url, cookies }) {
	const jwt = cookies.get('hrms_auth');

    if (!jwt) {
        throw redirect(301, '/login');
    }

	const response = await axiosfn.get(`/auth/me`, {
		headers: {
			Authorization: `Bearer ${jwt}`
		}
	});

	const user: IUser = response.data;
	if (user.account === null && url.pathname !== '/app/onboarding') {
		redirect(301, '/app/onboarding');
	}

	console.log(user);

	return {
		user
	};
}
