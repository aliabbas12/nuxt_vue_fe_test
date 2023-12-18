// https://nuxt.com/docs/api/configuration/nuxt-config

import { SystemLanguages } from "../global/constants/systemLanguages";

export default defineNuxtConfig({
  devtools: { enabled: true },
  i18n: {
    defaultLocale: "en",
    globalInjection: true,
    langDir: "lang/",
    legacy: false,
    locales: SystemLanguages,
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
