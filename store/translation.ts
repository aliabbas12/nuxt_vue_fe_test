import { defineStore } from "pinia";

export const useTranslationStore = defineStore("translation", {
  state: () => ({
    text: "",
  }),
  getters: {
    getText: (state) => state.text,
  },
  actions: {
    addText(text: string) {
      this.text = text;
    },
    clearText() {
      this.text = "";
    },
  },
});
