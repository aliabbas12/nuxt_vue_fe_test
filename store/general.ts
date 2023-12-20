import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    keyboard: false,
    listening: false,
    sideOverOpen: false,
    languageSelected: "en",
  }),
  getters: {
    getKeyboardState: (state) => state.keyboard,
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
    setSideOverState(value: boolean) {
      this.sideOverOpen = value;
    },
  },
});
