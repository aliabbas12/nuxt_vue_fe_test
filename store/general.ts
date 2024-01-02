import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    keyboard: false,
    listening: false,
    sideOverOpen: false,
    languageSelected: "en",
    translationLanguage: "en",
    autoDetectTranslation: true,
    currentSection: "section-1",
    tokens: [] as string[],
  }),
  getters: {
    getKeyboardState: (state) => state.keyboard,
    getTextTokens: (state) => state.tokens,
    getCurrentSectionState: (state) => state.currentSection,
    getSideOverState: (state) => state.sideOverOpen,
    getAutodetectTranslationLanguageState: (state) =>
      state.autoDetectTranslation,
    getListeningState: (state) => state.listening,
    getSelectedLanguageState: (state) => state.languageSelected,
    getSelectedTranslationLanguageState: (state) => state.translationLanguage,
  },
  actions: {
    setKeyboardState(value: boolean) {
      this.keyboard = value;
    },
    setListeningState(value: boolean) {
      this.listening = value;
    },
    setCurrentSectionState(value: string) {
      this.currentSection = value;
    },
    setSelectedLanguageState(value: string) {
      this.languageSelected = value;
    },
    setTextTokensState(value: string[]) {
      this.tokens = value;
    },
    setSideOverState(value: boolean) {
      this.sideOverOpen = value;
    },
    setTranslationLanguageState(value: string) {
      this.translationLanguage = value;
    },
    setAutoDetectTranslationLanguageState(value: boolean) {
      this.autoDetectTranslation = value;
    },
  },
});
