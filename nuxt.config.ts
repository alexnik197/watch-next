import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  srcDir: './src',
  compatibilityDate: '2025-10-04',
  devtools: { enabled: true },
  runtimeConfig: {
    kinopoiskApiKey: process.env.KINOPOISK_API_KEY,
    kinopoiskApiUrl: process.env.KINOPOISK_API_URL
  },

  css: ['~/assets/css/main.css'],
  
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss'
  ],

  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
}
})