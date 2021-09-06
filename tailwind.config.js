module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        borderColor: '#282626',
        lightGray: '#F1F1F1',
        brandRed: '#8D1922'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
