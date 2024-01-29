/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "violetPink": "#C961DE", 
        "darkBlue":"#2954A3"
      }
    },
  },
  plugins: [],
}