import { defineStore } from "pinia";

export const useTranslationStore = defineStore("translation", {
  state: () => ({
    text: "",
    selectedWord: "",
    token: [] as string[],
  }),
  getters: {
    getText: (state) => state.text,
    getSelectedWord: (state) => state.selectedWord,
    getTokens(state): string[] {
      return state.token;
    },
  },
  actions: {
    addText(text: string) {
      this.text = text;
    },
    setSelectedWord(text: string) {
      this.selectedWord = text;
    },
    setToken(tokens: string[]) {
      this.token = tokens;
    },
    clearText() {
      this.text = "";
    },
  },
});
