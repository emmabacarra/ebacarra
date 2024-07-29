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
    fontFamily: {
      'bogart': ['bogart', 'sans-serif'],
      'bogart-bold': ['bogart-bold', 'sans-serif'],
      'bogart-italic': ['bogart-italic', 'sans-serif'],
      'bogart-thin': ['bogart-thin', 'sans-serif'],
      'genty': ['genty', 'serif'],
      'tt_firs_neue': ['tt_firs_neue', 'san-serif'],
      'tt_firs_neue-thin': ['tt_firs_neue-thin', 'san-serif'],
    }
  },
  plugins: [],
}

