/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#bfb5b2',
        dark: {
          hard: '#1E1E1E',
          soft: '#2F2F2F',
        },
      },
      fontFamily: {
        quicksand: ["'Quicksand'", "sans-serif"],
      }
    },
  },
  plugins: [],
}