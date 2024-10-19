import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	const token = event.cookies.get('hrms_auth');

	if (!token && event.url.pathname.startsWith('/app')) {
		redirect(301, '/login');
	}

	const response = await resolve(event);
	return response;
};
