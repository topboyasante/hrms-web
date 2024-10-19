import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#dfdff4',
					100: '#cacaed',
					200: '#b0afe4',
					300: '#9694da',
					400: '#7b7ad1',
					base: '#615fc8',
					500: '#514fa7',
					600: '#413f85',
					700: '#313064',
					800: '#202043',
					900: '#131328'
				}
			}
		}
	},

	plugins: [flowbitePlugin]
};
