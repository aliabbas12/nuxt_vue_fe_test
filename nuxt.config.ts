// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  ui: {
    icons: [`mdi`, "ph"],
  },
  modules: ["@nuxtjs/color-mode", "@nuxtjs/eslint-module", "@nuxt/ui"],
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
