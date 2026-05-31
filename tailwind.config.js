/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f8f6',
          100: '#e6f0eb',
          200: '#cce1d7',
          300: '#a8ccb9',
          400: '#7db09a',
          500: '#7A9E8B',
          600: '#5a8470',
          700: '#496b5b',
          800: '#3c574a',
          900: '#32483e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
    },
  },
  plugins: [],
}
