/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        notosansjp: ['Noto Sans JP'],
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [],
}
