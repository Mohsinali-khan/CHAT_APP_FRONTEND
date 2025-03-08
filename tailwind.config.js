/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust this path if needed
	theme: {
		extend: {
			colors: {
				primary: "#50e3c2",
				secondary: "#50e3c2",
				background: "#f5f7fa",
				dark: "#1e2a38",
				messageSent: "#dcf8c6",
				messageReceived: "#eaeaea",
				textPrimary: "#1f2937",
				textSecondary: "#6b7280",
				error: "#ff3b30",
				success: "#34d399",
			},
		},
	},
	plugins: [],
};
