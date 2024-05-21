/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['poppins','sans-serif']
      },
      screens :{
        'small' : '478px',
        'large' : '920px'      }
    },
  },
  plugins: [],
}

