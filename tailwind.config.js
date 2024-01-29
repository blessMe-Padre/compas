/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'main-black': '#22253C',
      'blue': '#81B8F9',
      'blue-2': '#4466B6',
      'dark-blue': '#22253C',
      'green': '#D1D618',
      'gray': '#6B6B6B',
      'light-gray': '#C4C4C4',
      'light-gray-2': '#f6f6f6',
    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'bodyFont': ['archangelsk', 'regular'],
      }
    }
  },
  plugins: [],
}

