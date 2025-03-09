/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Add accent color classes to safelist to ensure they're generated
    'bg-accent-lavender', 'bg-accent-lemon', 'bg-accent-pine', 'bg-accent-patchouli',
    'bg-accent-grapefruit', 'bg-accent-lime', 'bg-accent-rosemary', 'bg-accent-eucalyptus',
    'bg-accent-lemongrass', 'bg-accent-tangerine', 'bg-accent-peppermint'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f9f5',
          100: '#e6f3e6',
          200: '#c2e0c2',
          300: '#9ecd9e',
          400: '#7ab97a',
          500: '#56a656',
          600: '#458545',
          700: '#346434',
          800: '#234223',
          900: '#112111',
        },
        secondary: {
          50: '#f7f9f9',
          100: '#e7eeef',
          200: '#c5d5d8',
          300: '#a3bcc1',
          400: '#81a3aa',
          500: '#5f8a93',
          600: '#4c6e76',
          700: '#395258',
          800: '#26373b',
          900: '#131b1d',
        },
        accent: {
          lavender: '#9d81ba',
          lemon: '#f9e076',
          pine: '#2d6a4f',
          patchouli: '#8b5a2b',
          grapefruit: '#fc8a6a',
          lime: '#c1d62e',
          rosemary: '#5f8575',
          eucalyptus: '#84a9ac',
          lemongrass: '#dce77a',
          tangerine: '#ff9a3c',
          peppermint: '#d1e8e2',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}; 