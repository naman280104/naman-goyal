
import type { Config } from "tailwind-css";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				mono: ["JetBrains Mono", "Fira Code", "Menlo", "Monaco", "Consolas", "monospace"],
				sans: ["Inter", "system-ui", "sans-serif"],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				terminal: {
					dark: "#0f1419",
					black: "#121212",
					green: "#39D353",
					blue: "#58a6ff",
					purple: "#9b87f5",
					cyan: "#56d4dd", 
					neon: "#00FFC6",
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"blink": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0" },
				},
				"typing": {
					"from": { width: "0" },
					"to": { width: "100%" },
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"glitch": {
					"0%, 100%": { transform: "translate(0)" },
					"20%": { transform: "translate(-2px, 2px)" },
					"40%": { transform: "translate(-2px, -2px)" },
					"60%": { transform: "translate(2px, 2px)" },
					"80%": { transform: "translate(2px, -2px)" },
				},
				"pulse-glow": {
					"0%, 100%": { 
						opacity: "1", 
						boxShadow: "0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3)" 
					},
					"50%": { 
						opacity: "0.8", 
						boxShadow: "0 0 15px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)" 
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"blink": "blink 1s step-end infinite",
				"typing": "typing 3.5s steps(40, end)",
				"float": "float 6s ease-in-out infinite",
				"glitch": "glitch 0.3s ease-in-out infinite",
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
