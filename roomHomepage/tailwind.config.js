/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./html/*.html",
    "./css/*.css"
  ],
  theme: {
    extend: {
      screens: {
        xs : "500px"
      },
      fontFamily : {
        "spartan" : ["League Spartan", "sans-serif"]
      },
      boxShadow : {
        "3xl" : "2px 4px 2px "
      }
    }
  },
  plugins: [],
}

