/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.js"
  ],
  theme: {
    fontFamily: {
      main: ['Montserrat'],
      numbers: ['Merriweather', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'chalckboard': "url('./Images/green.jpg')",
      },
      colors: {
        dark_1: '#162636',
        dark_2: '#0B4C53',
        header: '#162636', 
        header_b: '#0E1924',
        green: '#34F5C6',
        light_green: '#9fcfc3',
        dark_green: '#79C1B0',
        light: '#D9D9D9',

      },
    },
  },
  plugins: [],
}
