import { defineStore } from "pinia";

export const useLocalStorageService = defineStore({
  id: "localStorageService",
  state: () => ({
    data: {},
  }),
  getters: {
    getItem: (state) => (key) => {
      return state.data[key];
    },
  },
  actions: {
    setItem(key, value) {
      this.data[key] = value;
      localStorage.setItem(key, JSON.stringify(value));
    },
    removeItem(key) {
      delete this.data[key];
      localStorage.removeItem(key);
    },
    clear() {
      this.data = {};
      localStorage.clear();
    },
  },
});
