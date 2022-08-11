/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Kanit', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        bgBlue: '#e5f0ff',
        softBlue: '#5b4dff',
        softBlueCyan: '#4d97ff',
        softCyan: '#4df0ff',
        softCyanGreen: '#4dffb5',
        softGreen: '#4dff5b',
        softGreenYellow: '#97ff4d',
        softYellow: '#f0ff4d',
        softYellowRed: '#ffb54d',
        softRed: '#ff5b4d',
        softRedMagenta: '#ff4d97',
        softMagenta: '#ff4df0',
        softMagentaBlue: '#b54dff',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
