/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', ...defaultTheme.fontFamily.sans],
        mono: ['"Roboto Mono"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
