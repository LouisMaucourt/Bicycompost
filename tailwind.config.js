const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './react-bricks/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: '600px',
        lg: '900px',
        xl: '1200px',
      },
      boxShadow: {
        newsLetter:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1) , 0 5px 15px 0 rgba(0, 0, 0, 0.05)',
      },
      colors: {
        'green-black': 'var(--green-black)',
        'green-dark': 'var(--green-dark)',
        'green': 'var(--green)',
        'green-apple': 'var(--green-apple)',
        'green-light': 'var(--green-light)',
        'green-white': 'var(--green-white)',
        'beige-dark': 'var(--beige-dark)',
        'beige': 'var(--beige)',
        'beige-light': 'var(--beige-light)',
        'beige-white': 'var(--beige-white)',
        'orange-black': 'var(--orange-black)',
        'orange-dark': 'var(--orange-dark)',
        'orange': 'var(--orange)',
        'orange-light': 'var(--orange-light)',
        'orange-white': 'var(--orange-white)',
        'black-1000': 'var(--black-1000)',
        'black-900': 'var(--black-900)',
        'grey-800': 'var(--grey-800)',
        'grey-700': 'var(--grey-700)',
        'grey-600': 'var(--grey-600)',
        'grey-500': 'var(--grey-500)',
        'grey-400': 'var(--grey-400)',
        'grey-300': 'var(--grey-300)',
        'grey-200': 'var(--grey-200)',
        'grey-100': 'var(--grey-100)',
        'error': 'var(--error)',
        'error-light': 'var(--error-light)',
        'error-white': 'var(--error-white)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
