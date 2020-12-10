module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, //media or class
  theme: {
    extend: {
      fontFamily: {
        'display': ["Roboto", "sans-serif", "Ariel"]
      },
      backgroundImage: theme => ({
        'dots': "url('/src/assets/dots.png')",
        'dots2': "url('/src/assets/dots2.png')",
      }),
      textColor: {
        'lightBlue': '#7cd6dc',
        'lightGray': '#454545',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'lightBlue': '#7cd6dc',
        'darkGray': '#454545',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
