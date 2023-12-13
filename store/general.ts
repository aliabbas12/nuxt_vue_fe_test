import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    keyboard: false,
    listening: false,
    languageSelected: "en",
  }),
  getters: {
    getKeyboardState: (state) => state.keyboard,
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
  },
});
