/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'airbnb-red': '#FF5A5F',
        'airbnb-pink': '#FF385C',
        'airbnb-dark-gray': '#222222',
        'airbnb-light-gray': '#717171',
      },
    },
  },
  plugins: [],
};