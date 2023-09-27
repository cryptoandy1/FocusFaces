/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        giliams: 'giliams',
      },
      screens: {
        xs: '480px',
      },
      keyframes: {
        skillsMove: {
          '0%': {
            transform: 'translateX(5%) translateY(0)',
          },
          '41%': {
            transform: 'translateX(105%) translateY(0)',
          },
          '50%': {
            transform: 'translateX(105%) translateY(102%)',
          },
          '91%': {
            transform: 'translateX(5%) translateY(102%)',
          },
          '100%': {
            transform: 'translateX(5%) translateY(0)',
          },
        },
      },
      animation: {
        skillsMove: 'skillsMove 18s linear infinite',
        rotateOnce: 'spin 0.3s linear 1',
      },
    },
  },
  plugins: [],
}
