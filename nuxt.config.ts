// https://nuxt.com/docs/api/configuration/nuxt-config

import { SystemLanguages } from "../global/constants/systemLanguages";

export default defineNuxtConfig({
  devtools: { enabled: true },
  i18n: {
    strategy: "prefix",
    defaultLocale: "en",
    langDir: "lang/",
    locales: SystemLanguages,
    detectBrowserLanguage: {
      useCookie: false,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600&display=swap",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/eslint-module",
    "@nuxt/ui",
    "nuxt-viewport",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "vue3-carousel-nuxt",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
  tailwindcss: {
    configPath: "~/tailwind.config.js",
  },
  ui: {
    icons: [`mdi`, "ph"],
  },
});
