import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      virtualKeyboard: Keyboard,
    },
  };
});
