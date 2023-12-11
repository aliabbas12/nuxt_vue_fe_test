import { defineStore } from "pinia";

export const useTranslationStore = defineStore("translation", {
  state: () => ({
    text: "my name is Abdullah",
  }),
  getters: {
    getText: (state) => state.text,
  },
  actions: {
    addText(text: string) {
      this.text = text;
    },
  },
});
