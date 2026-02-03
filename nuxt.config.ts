// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  
  app: {
    head: {
      title: 'Rick And Morty (Mahdi Ghanbari)',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Tabdeal test project' },
      ],
    },
    rootAttrs: {
      id: 'app'
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/_fonts.scss'],

  vite: {
    plugins: [
      tailwindcss()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_colors.scss" as *;'
        }
      }
    }
  },

  modules: ['@nuxt/image']
})