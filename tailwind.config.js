const extend = require('tailwindcss/plugin');

module.exports = {
  purge: false,
  darkMode: 'media', //false, media, or class
  theme: {
    extend: {
      fontFamily: {
        'display': ["Roboto", "sans-serif", "Ariel"]
      },
      backgroundImage: theme => ({
        'dots': "url('/src/assets/dots.png')",
        'dots2': "url('/src/assets/dots2.png')",
        'pageTrade': "url('/src/assets/pageTrade.png')",
        'sherlockStocks': "url('/src/assets/sherlockStocks.png')",
        'cumulus': "url('/src/assets/cumulus.png')",
      }),
      textColor: {
        'lightBlue': '#7cd6dc',
        'lightGray': '#454545',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'lightBlue': '#7cd6dc',
        'darkGray': '#454545',
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        'lightBlue': '#7cd6dc',
        'lightGray': '#454545',
        'darkGray': '#454545',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
