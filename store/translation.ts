import { defineStore } from "pinia";

export const useTranslationStore = defineStore("translation", {
  state: () => ({
    text: "",
    selectedWord: "",
    token: [] as string[],
    issues: [] as string[],
  }),
  getters: {
    getText: (state) => state.text,
    getSelectedWord: (state) => state.selectedWord,
    getTokens(state): string[] {
      return state.token;
    },
    getIssues(state): string[] {
      return state.issues;
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
    setIssues(issues: string[]) {
      this.issues = issues;
    },
    clearText() {
      this.text = "";
    },
    clearIssues() {
      this.issues = [];
    },
  },
});
