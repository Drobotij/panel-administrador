/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
    colors: {
      'primary': '#F48C65',
      'secondary': '#1F1F1F',
      'third': '#FEFEFE',
      'fourth': '#0E0E0E'
    },
    fontFamily: {
      sans: ['"Ubuntu"', 'sans-serif']
    },
  },
  plugins: [],
}
