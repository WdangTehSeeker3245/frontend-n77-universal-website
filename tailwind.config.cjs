/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ]
}
