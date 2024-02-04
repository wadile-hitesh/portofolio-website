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
        "darkBlue":"#2954A3",
        "blue-rgba": 'rgba(47, 47, 138, 0.60)',
        "white-rgba": 'rgba(255, 255, 255, 0.30)',
        "footer-rgba": 'rgba(255, 255, 255, 0.15)',
        "footer-blue": 'rgba(28, 28, 101,0.60)'
      },
      boxShadow:{
        'in': "0px 10px 20px 0px rgba(7, 7, 26, 0.15);"
      }
    },
  },
  plugins: [],
}