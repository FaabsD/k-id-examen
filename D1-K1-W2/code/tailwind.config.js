const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    '*.html',
    '*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ocean: {
          light: '#88bddf',
          DEFAULT: '#058fcd',
          dark: '#015f81'
        },
        oceanGreen: {
          light: '#77ddc4',
          DEFAULT: '#01b2a2',
          dark: '#047e73'
        },
        salmon: {
          lighter: '#fadfb0',
          light: '#f9d098',
          DEFAULT: '#fab28a',
          dark: '#ffa07a',
          darker: '#fa8071'
        } 
      },

      fontFamily: {
        'comfortaa': ['Comfortaa'],
        'open': 'Open Sans'
      },

      minHeight: {
        'min': 'min-content'
      },

      height: {
        'min': 'min-content'
      },

      maxWidth: {
        'screen': '100vw'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
