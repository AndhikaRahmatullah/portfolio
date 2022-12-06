// /** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		container: {
			center: true,
			padding: "40px"
		},
		extend: {
			colors: {
				primary: "#0ea5e9",
				dark: "#171717"
			},
		},
		screens: {
			'md': "768px",
			'lg': "1024px",
			'xl': "1280px",
			'2xl': "1400px"
		}
	},
	plugins: [
		require("prettier-plugin-tailwindcss")
	],
}
