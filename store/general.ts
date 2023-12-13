import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    keyboard: false,
    listening: false,
  }),
  getters: {
    getKeyboardState: (state) => state.keyboard,
    getListeningState: (state) => state.listening,
  },
  actions: {
    setKeyboardState(value: boolean) {
      this.keyboard = value;
    },
    setListeningState(value: boolean) {
      this.listening = value;
    },
  },
});
