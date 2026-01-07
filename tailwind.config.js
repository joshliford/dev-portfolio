/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			charcoal: '#1a1a1a',
  			parchment: '#e8e6e3',
  			godRed: '#8b0000',
  			bronze: '#b87333',
  			slate: '#4a5568'
  		},
  		fontFamily: {
  			cinzel: [
  				'Cinzel',
  				'serif'
  			],
  			merriweather: [
  				'Merriweather',
  				'serif'
  			]
  		},
  		keyframes: {
  			"collapsible-down": {
    			from: { height: "0" },
    			to: { height: "var(--radix-collapsible-content-height)" },
  			},
  			"collapsible-up": {
    			from: { height: "var(--radix-collapsible-content-height)" },
    			to: { height: "0" },
  			},
		},
		animation: {
  			"collapsible-down": "collapsible-down 0.4s ease-in-out",
  			"collapsible-up": "collapsible-up 0.4s ease-in-out",
		},
  	}
  },
  plugins: [],
}