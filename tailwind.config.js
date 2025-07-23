/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
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
