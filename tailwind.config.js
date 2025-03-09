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
          50: '#f7f8f6',
          100: '#eff1ed',
          200: '#e0e4db',
          300: '#c4cdbf',
          400: '#a7b39f',
          500: '#8a9a83',
          600: '#6c7b68',
          700: '#5a6556',
          800: '#4a5246',
          900: '#3c423a',
        },
        secondary: {
          50: '#f6f9f9',
          100: '#e7f0f0',
          200: '#d0e2e1',
          300: '#b2cdc9',
          400: '#8fb6b1',
          500: '#679c96',
          600: '#5a8c87',
          700: '#487370',
          800: '#3c5e5c',
          900: '#324d4c',
        },
        accent: {
          lavender: '#d3c7e3',
          lemon: '#f9f0c8',
          pine: '#5c8c7b',
          patchouli: '#c3a995',
          grapefruit: '#f8c8b8',
          lime: '#dbe6b0',
          rosemary: '#9db9a8',
          eucalyptus: '#b9ccd0',
          lemongrass: '#e6ecc0',
          tangerine: '#f7d3b5',
          peppermint: '#d1e8e2',
        },
        neutral: {
          50: '#f9f8f6',
          100: '#f1efec',
          200: '#e2dfd9',
          300: '#c7c2b8',
          400: '#aaa396',
          500: '#8a8275',
          600: '#736c61',
          700: '#5e5850',
          800: '#4c4842',
          900: '#3e3b37',
        }
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