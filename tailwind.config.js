/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem'
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        baloo: ['"Baloo 2"', "serif"],
      },
      colors: {
        'yellow-dark': '#C47F17',
        yellow: '#DBAC2C',
        'yellow-light': '#F1E9C9',
        'purple-dark': '#4B2995',
        purple: '#8047F8',
        'purple-light': '#EBE5F9',
        base: {
          'title': '#272221',
          'subtitle': '#403937',
          'text': '#574F4D',
          'label': '#8D8686',
          'hover': '#D7D5D5',
          'button': '#E6E5E5',
          'input': '#EDEDED',
          'card': '#F3F2F2',
          'background': '#FAFAFA',
        },
        white: '#FFFFFF',
      },
      fontSize: {
        '0.5xs': '0.625rem',
        '3.5xl': '2rem'
      },
      lineHeight: {
        130: '130%',
        160: '160%'
      }
    },
    plugins: [],
  }
}
