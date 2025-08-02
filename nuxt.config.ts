// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    baseURL: '/Website/', // GitHub Pages deployment path
    buildAssetsDir: '/_nuxt/',
    cdnURL: '/Website/'
  },

  router: {
    base: '/Website/'
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
    preset: 'github-pages',
    prerender: {
      routes: ['/404.html']
    }
  },

  experimental: {
    payloadExtraction: false
  },

  ssr: false // Enable SPA mode for GitHub Pages
})