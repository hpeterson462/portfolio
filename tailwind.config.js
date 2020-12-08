module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, //media or class
  theme: {
    extend: {
      fontFamily: {
        'display': ["Roboto", "sans-serif", "Ariel"]
      },
      backgroundImage: theme => ({
        'keyboard': "url('/public/black-white-keyboard.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
