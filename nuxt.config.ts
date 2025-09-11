// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    head: {
      title: "Suffaq"
    }
  },
  aos: {
    once: false,
    mirror: false,
    duration: 1000
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  modules: ['@nuxt/eslint', '@nuxt/ui', 'nuxt-aos', 'motion-v/nuxt']
})