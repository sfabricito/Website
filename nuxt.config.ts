// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/Website/',
    buildAssetsDir: '/_nuxt/',
    cdnURL: process.env.NUXT_APP_BASE_URL || '/Website/'
  },

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    base: process.env.NUXT_APP_BASE_URL || '/Website/',
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
    preset: 'github-pages'
  },

  experimental: {
    payloadExtraction: false
  },

  ssr: false // Enable SPA mode for GitHub Pages
})