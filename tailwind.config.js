/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/neova-ui/dist/**/*.{js,svelte}'],
	theme: {
		extend: {}
	},
	plugins: [],
	presets: [require('neova-ui/preset.cjs')]
};
