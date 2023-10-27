/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        roboto : ['Roboto', 'sans-serif']
      },
      colors:{
        'dark-grey': "hsl(234, 29%, 20%)",
        'charcoal-grey': "hsl(235, 18%, 26%)",
        'grey': "hsl(231, 7%, 60%)",
        'white-own': "hsl(0, 0%, 100%)",
        'tomato': "hsl(4, 100%, 67%)"

      },
    },
  },
  plugins: [],
}

