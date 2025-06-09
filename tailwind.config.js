// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        heroBg:     '#0f172a', // blue-900
        aboutBg:    '#f1f5f9', // slate-100
        projectsBg: '#1e293b', // slate-800
        primary:    '#004d26',
        secondary:  '#062f66',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',  // on <640px
          sm:      '2rem',  // ≥640px
          lg:      '4rem',  // ≥1024px
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      spacing: {
        // renamed to avoid automatic application everywhere:
        'section-y-lg': '24rem',  // only use on really big screens
        'section-x-lg': '12rem',
      },
      keyframes: {
        gradientBG: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%':      { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient-bg': 'gradientBG 12s ease infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};