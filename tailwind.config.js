/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        background1: 'var(--color-background1)',
        background2: 'var(--color-background2)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        caveat: ['Caveat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        plusjakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
};
