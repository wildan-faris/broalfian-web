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
       
  animationPlayState: {
    'paused': 'paused'
  },

      animation: {
        'infinite-scroll-left': 'scroll-left 25s linear infinite',
        'infinite-scroll-right': 'scroll-right 25s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'scroll-right': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      colors: {
        background1: 'var(--color-background1)',
        background2: 'var(--color-background2)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        card1: 'var(--color-card1)',
        ring1: 'var(--color-ring1)'
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
