/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': '#E1E1E6',
        'gray-300': '#C4C4CC',
        'gray-400': '#8D8D99',
        'gray-500': '#7C7C8A',
        'gray-600': '#323238',
        'gray-700': '#29292E',
        'gray-800': '#202024',
        'gray-900': '#121214',
        'black-700': '#08040c',
        'button-color': '#00676C',
        'green': '#00676C'
      },
      width: {
        '93.75': '93.75rem',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
