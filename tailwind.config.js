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
      colors: {
        github: { default: '#F5F4F4', hover: '#EDEBEB' },
        twitter: { default: '#EEF8FF', hover: '#E5EFF8' },
        qiita: { default: '#EEFAE6', hover: '#E8F4DF' },
      },
    },
  },
  plugins: [],
}
