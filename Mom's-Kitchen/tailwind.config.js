/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body:['Rubik Microbe'],
        langar:['Langar']
      },
      backgroundImage:{
        'kitchen':"url('./kitchen.jpg')"
      }
    },
  },
  plugins: [],
}

