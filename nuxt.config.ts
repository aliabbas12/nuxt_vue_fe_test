// https://nuxt.com/docs/api/configuration/nuxt-config
import { SystemLanguages } from "../global/constants/systemLanguages";

export default defineNuxtConfig({
  ssr: false,
  ui: {
    icons: [`mdi`, "ph"],
  },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/eslint-module",
    "@nuxt/ui",
    "nuxt-viewport",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],
  i18n: {
    legacy: false,
    globalInjection: true,
    locales: SystemLanguages,
    langDir: "lang/",
    defaultLocale: "en",
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    configPath: "~/tailwind.config.js",
  },
});
