module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        borderColor: '#282626'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
