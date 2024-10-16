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
					50: '#cee7de',
					100: '#aed7c8',
					200: '#85c3ac',
					300: '#5cae90',
					400: '#349a75',
					base: '#0b8659',
					500: '#09704a',
					600: '#07593b',
					700: '#06432d',
					800: '#042d1e',
					900: '#021b12'
				}
			}
		}
	},

	plugins: [flowbitePlugin]
};
