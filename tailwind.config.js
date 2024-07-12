/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'orange': '#FD6D2F',
        'yellow': '#FFD18C',
        'skin': '#FAE8E0',
        'brown': '#493931',
        'violet': '#DFAFDB',
        'grey': '#F1F2F2',
      }
    },
  },
  plugins: [],
}

