// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      id: 'app'
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss', '~/assets/scss/root.css'],

  vite: {
    plugins: [
      tailwindcss()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *; @use "~/assets/scss/_fonts.scss" as *;'
        }
      }
    }
  },

  modules: ['@nuxt/image']
})