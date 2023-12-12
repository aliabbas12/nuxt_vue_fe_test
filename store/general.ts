import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    keyboard: false,
  }),
  getters: {
    getKeyboardState: (state) => state.keyboard,
  },
  actions: {
    setKeyboardState(value: boolean) {
      this.keyboard = value;
    },
  },
});
