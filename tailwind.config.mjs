/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
			dark: '#16171A',
			grey: '#212326',
			light: '#F8FAFC',
			blue: '#4599FE',
			red: '#EE0405',
		},
		fontFamily: {
		  'barlow': ['"Barlow Condensed"', 'sans-serif'],
		  'heebo': ['Heebo', 'sans-serif']
		}
	  }
	},
	plugins: [],
  }