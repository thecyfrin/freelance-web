import svgr from "vite-plugin-svgr";

/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				twWhite: "#FFFFFF",
			},
		},
	},
	plugins: [svgr()],
	
};
