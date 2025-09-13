// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    head: {
      title: "Suffaq"
    }
  },
  fonts: {
    families: [
      {
        name: 'Titilium Web',
        weights: [400, 500, 600, 700, 800, 900],
        provider: 'google',
      }
    ]
  },
  aos: {
    once: false,
    mirror: false,
    duration: 1000
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    'nuxt-aos',
    'motion-v/nuxt',
    '@nuxt/fonts',
    'nuxt-lottie'
  ],
  lottie: {
    componentName: 'Lottie',
    lottieFolder: '/assets/lottie',
    autoFolderCreation: true,
    enableLogs: true
  }
})