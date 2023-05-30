/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#388087',
        'secondary': '#6fb3b8',
        'accent': '#c2edce',
        'background': '#f6f6f2',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Roboto Slab', 'serif'],
      }
    },
  },
  plugins: [],
}

