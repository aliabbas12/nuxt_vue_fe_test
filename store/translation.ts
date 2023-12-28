import { defineStore } from "pinia";

export const useTranslationStore = defineStore("translation", {
  state: () => ({
    text: "",
    token: [] as string[],
  }),
  getters: {
    getText: (state) => state.text,
    getTokens(state): string[] {
      return state.token;
    },
  },
  actions: {
    addText(text: string) {
      this.text = text;
    },
    setToken(tokens: string[]) {
      this.token = tokens;
    },
    clearText() {
      this.text = "";
    },
  },
});
