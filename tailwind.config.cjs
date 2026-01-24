/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // This sets the default font stack
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        // You can use 'font-heading' class if you need to force a heading font elsewhere
        heading: ['"Outfit"', 'sans-serif'],
      },
      // ... keep your other extensions like animation/keyframes here
    },
  },
  plugins: [],
}