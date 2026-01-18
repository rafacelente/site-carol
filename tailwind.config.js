/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FCF9F8', // Softest cream
          100: '#F8F1EE', // Cream blush
          200: '#F2E1DC', // Light champagne rosé
          300: '#EACCC4', // Soft rose
          400: '#DDB4AA', // Dusty rose
          500: '#C8958A', // Antique rose
          600: '#B8887E', // Soft Rosy Brown
          700: '#9E7068', // Muted Old Rose
          800: '#845952', // Deep Mauve Brown
          900: '#6A423D', // Dark Rosé Wood
        },
        secondary: {
          50: '#FDFBF9', // Silk white
          100: '#F7F4F0', // Silk
          200: '#EDE6DF', // Linen
          300: '#EDE6DF', // Darker linen
          400: '#C6BAB0', // Greige
          500: '#B0A296', // Taupe
          600: '#96887C',
          700: '#7C6E63',
          800: '#63564D',
          900: '#4B4038',
        },
      },
      fontFamily: {
        sans: ['Garet', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
    
      animation: {
        bounce: 'bounce 2s infinite',
      },
    },
    
  },
  plugins: [],
};