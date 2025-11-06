import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  srcDir: './src',
  compatibilityDate: '2025-10-04',
  devtools: { enabled: true },

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