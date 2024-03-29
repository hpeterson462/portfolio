const extend = require('tailwindcss/plugin');

module.exports = {
  purge: false,
  darkMode: 'media', //false, media, or class
  theme: {
    extend: {
      fontFamily: {
        header: ['Raleway', 'sans-serif'],
        body: ['Lora', 'serif']
      },
      backgroundImage: theme => ({
        'dots': "url('/src/assets/dots.png')",
        'dots2': "url('/src/assets/dots2.png')",
        'pageTrade': "url('/src/assets/pageTrade.png')",
        'sherlockStocks': "url('/src/assets/sherlockStocks.png')",
        'babyMe': "url('/src/assets/babyMe.png')",
        'cumulus': "url('/src/assets/cumulus.png')",
        'heatTransfer': "url('/src/assets/heatTransfer.png')",
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
