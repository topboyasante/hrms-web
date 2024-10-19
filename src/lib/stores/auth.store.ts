import { writable } from 'svelte/store';

interface AuthState {
	isAuthenticated: boolean;
	access_token: string | null;
}

interface User {
	id: string;
	name: string;
	email: string;
}

export const auth = writable<AuthState>({
	isAuthenticated: false,
	access_token: null
});
