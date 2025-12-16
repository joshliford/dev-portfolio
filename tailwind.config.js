/** @type {import('tailwindcss').Config} */
export default {
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
        slate: '#4a5568',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}