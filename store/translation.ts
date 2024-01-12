import { defineStore } from "pinia";
import { TranslationIssues } from "~/global/enums/translationIssues";

export const useTranslationStore = defineStore("translation", {
  state: () => ({
    text: "",
    isTranslationLike: false,
    isTranslationButtonClicked: false,
    selectedWord: "",
    translationLanguage: "en" as "en" | "it" | "se",
    token: [] as string[],
    issues: [] as string[],
    issueType: TranslationIssues.NOT_FOUND as TranslationIssues,
  }),
  getters: {
    getText: (state) => state.text,
    getTranslationButtonState: (state) => state.isTranslationButtonClicked,
    getSelectedWord: (state) => state.selectedWord,
    getTranslationLikeState: (state) => state.isTranslationLike,
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
    setTranslationLikeState(value: boolean) {
      this.isTranslationLike = value;
    },
    setSelectedWord(text: string) {
      this.selectedWord = text;
    },
    setTranslationButtonState(value: boolean) {
      this.isTranslationButtonClicked = value;
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
