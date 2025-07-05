/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf6f4',
          100: '#f9e8e4',
          200: '#f4d1ca',
          300: '#ebb3a7',
          400: '#e18d7a',
          500: '#d56e57',
          600: '#c45644',
          700: '#a34438',
          800: '#853a32',
          900: '#6d332d',
        },
        secondary: {
          50: '#f7f6f9',
          100: '#efedf3',
          200: '#dfdce7',
          300: '#cbc6d6',
          400: '#b3abc1',
          500: '#9c92ad',
          600: '#8c7f9e',
          700: '#766a85',
          800: '#62586d',
          900: '#514a59',
        },
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};