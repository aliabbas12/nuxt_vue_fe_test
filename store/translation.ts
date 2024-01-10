import { defineStore } from "pinia";
import { TranslationIssues } from "~/global/enums/translationIssues";

export const useTranslationStore = defineStore("translation", {
  state: () => ({
    text: "",
    isTextTranslated: false,
    selectedWord: "",
    translationLanguage: "en" as "en" | "it" | "se",
    token: [] as string[],
    issues: [] as string[],
    issueType: TranslationIssues.NOT_FOUND as TranslationIssues,
  }),
  getters: {
    getText: (state) => state.text,
    getTextTranslatedState: (state) => state.isTextTranslated,
    getSelectedWord: (state) => state.selectedWord,
    getTokens(state): string[] {
      return state.token;
    },
    getIssues(state): string[] {
      return state.issues;
    },
    getIssuesTypeState(state): TranslationIssues {
      return state.issueType;
    },
    getTranslationLanguageState(state): "en" | "it" | "se" {
      return state.translationLanguage;
    },
  },
  actions: {
    addText(text: string) {
      this.text = text;
    },
    setSelectedWord(text: string) {
      this.selectedWord = text;
    },
    setTextTranslatedState(value: boolean) {
      this.isTextTranslated = value;
    },
    setToken(tokens: string[]) {
      this.token = tokens;
    },
    setIssues(issues: string[]) {
      this.issues = issues;
    },
    setIssuesTypeState(type: TranslationIssues) {
      this.issueType = type;
    },
    setTranslationLanguageState(type: "en" | "it" | "se") {
      this.translationLanguage = type;
    },
    clearText() {
      this.text = "";
    },
    clearIssues() {
      this.issues = [];
    },
    removeWordFromText(word: string) {
      const regex = new RegExp("\\s*\\b" + word + "\\b\\s*", "g");
      this.text = this.text.replace(regex, " ").trim();
    },
  },
});
