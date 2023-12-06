/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			colors: {
				'dark': {
					200: '#232323',
					300: '#1F1F1F',
					400: '#1B1B1B',
					500: '#171717',
					600: '#131313',
					700: '#0F0F0F',
				},
				'grey': {
					500: '#474747',
					1000: '#333333',
				},
				'light': {
					500: '#C7C7C7',
				},
			},
			boxShadow: {
				'bottom': '0 5px 10px -5px rgba(0, 0, 0, 0.75)',
				'around-sm': '0 0 10px 1px rgba(0, 0, 0, 0.75)',
				'around-xl': '0 0 15px 5px rgba(0, 0, 0, 0.75)',
			},
			dropShadow: {
				'around-xl': '0 0 7px rgba(0, 0, 0, 1)'
			}
		}
	},
	plugins: [],
	content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}