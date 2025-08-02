// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  // app: {
  //   baseURL: '/Website/' // Only enable this for GitHub Pages deployment
  // },

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],

  vite: {
    plugins: []
  },

  modules: [
    "@nuxt/eslint",
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],

  googleFonts: {
    families: {
      "Roboto Mono": true,
      "Manrope": true,
    },
    display: 'swap'
  },

  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
        commaDangle: "always-multiline",
        indent: "tab"
      }
    }
  },

  nitro: {
    preset: 'static'
  }
})