import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      virtualKeyboard: Keyboard,
    },
  };
});
