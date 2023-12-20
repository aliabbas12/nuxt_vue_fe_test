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
    setItem(key: any, value: any) {
      this.data[key] = value;
      localStorage.setItem(key, JSON.stringify(value));
    },
    removeItem(key: any) {
      if (this.data[key] !== null && this.data[key] !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this.data[key];
        localStorage.removeItem(key);
      }
    },
    clear() {
      this.data = {};
      localStorage.clear();
    },
  },
});
