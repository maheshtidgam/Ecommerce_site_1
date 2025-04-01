/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4263eb',
        secondary: '#63e6be',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '7rem',
        },
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
        '104': '1.04'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}