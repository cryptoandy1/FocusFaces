/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
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
            transform: 'translateX(0) translateY(0)',
          },
          '41%': {
            transform: 'translateX(100%) translateY(0)',
          },
          '50%': {
            transform: 'translateX(100%) translateY(102%)',
          },
          '91%': {
            transform: 'translateX(0%) translateY(102%)',
          },
          '100%': {
            transform: 'translateX(0) translateY(0)',
          },
        },
        skewBorder: {
          '0%': {
            'border-radius': '50%',
          },
          '17%': {
            'border-radius': '80% 20% 53% 47% / 50% 50% 50% 50%',
          },
          '34%': {
            'border-radius': '84% 16% 65% 35% / 50% 78% 22% 50%',
          },
          '51%': {
            'border-radius': '50% 50% 50% 50% / 50% 79% 21% 50%',
          },
          '68%': {
            'border-radius': '50% 50% 89% 11% / 51% 53% 47% 49%',
          },
          '85%': {
            'border-radius': '50% 50% 49% 51% / 19% 53% 47% 81%',
          },
          '100%': {
            'border-radius': '50%',
          },
        },
      },
      animation: {
        skillsMove: 'skillsMove 18s linear infinite',
        rotateOnce: 'spin 0.3s linear 1',
        skewBorder: 'skewBorder 5s linear infinite',
      },
    },
  },
  plugins: [],
}
