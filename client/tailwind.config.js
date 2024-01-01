/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': ['Montserrat', 'Poppins', 'Inknut Antiqua', 'sans-serif']
    },
  },
  plugins: [],
}