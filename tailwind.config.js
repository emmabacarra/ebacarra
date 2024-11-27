/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
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
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      'bogart': ['bogart', 'Inter', 'sans-serif'],
      'bogart-bold': ['bogart-bold', 'Inter', 'sans-serif'],
      'bogart-italic': ['bogart-italic', 'Inter', 'sans-serif'],
      'bogart-thin': ['bogart-thin', 'Inter', 'sans-serif'],
      'genty': ['genty', 'serif'],
      'tt_firs_neue': ['tt_firs_neue', 'Inter', 'sans-serif'],
      'tt_firs_neue-thin': ['tt_firs_neue-thin', 'Inter', 'sans-serif'],
    }
  },
  plugins: [],
}

