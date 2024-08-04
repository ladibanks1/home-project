/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./html/*.html",
    "./css/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat" : ["Montserrat" , "san-serif"]
      },
      colors: {
        "blue-150" : "hsl(237, 63%, 64%)"
      },
      boxShadow: {
        "3xl" : "5px 10px 15px 0px"
      }
    },
  },
  plugins: [],
}

