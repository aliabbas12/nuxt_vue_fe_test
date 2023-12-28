import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    keyboard: false,
    listening: false,
    sideOverOpen: false,
    languageSelected: "en",
    tokens: [] as string[],
  }),
  getters: {
    getKeyboardState: (state) => state.keyboard,
    getTextTokens: (state) => state.tokens,
    getSideOverState: (state) => state.sideOverOpen,
    getListeningState: (state) => state.listening,
    getSelectedLanguageState: (state) => state.languageSelected,
  },
  actions: {
    setKeyboardState(value: boolean) {
      this.keyboard = value;
    },
    setListeningState(value: boolean) {
      this.listening = value;
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
  },
});
