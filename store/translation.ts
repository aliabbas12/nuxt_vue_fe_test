import { defineStore } from "pinia";

export const useTranslationStore = defineStore("translation", {
  state: () => ({
    text: "",
    isTranslationButtonClicked: false,
    selectedWord: "",
    token: [] as string[],
    issues: [] as string[],
  }),
  getters: {
    getText: (state) => state.text,
    getTranslationButtionState: (state) => state.isTranslationButtonClicked,
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
    setTranslartiobButionState(value: boolean) {
      this.isTranslationButtonClicked = value;
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
