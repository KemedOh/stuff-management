/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    plugins: [
      require('flowbite/plugin')
    ]
  },
  plugins: [require('flowbite/plugin')({
    charts: true,
  }),],
}

