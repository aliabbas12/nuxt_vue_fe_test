import { defineStore } from "pinia";

export const useLocalStorageService = defineStore({
  id: "localStorageService",
  state: () => ({
    history: [] as string[],
    localWordTranslations: [] as string[],
  }),
  getters: {
    getHistory: (state): any[] => {
      const storageHistory = localStorage.getItem("menulance");
      if (storageHistory !== null) {
        const { history } = JSON.parse(storageHistory);
        if (history != null) {
          state.history = history;
        }
      }
      return state.history;
    },
    getLocalWordTranslations: (state): any[] => {
      const storageLocalWordTranslations = localStorage.getItem("menulance");
      if (storageLocalWordTranslations !== null) {
        const { localWordTranslations } = JSON.parse(
          storageLocalWordTranslations,
        );
        if (localWordTranslations != null) {
          state.localWordTranslations = localWordTranslations;
        }
      }
      return state.localWordTranslations;
    },
  },
  actions: {
    clear() {
      this.history = [];
      localStorage.clear();
    },
    setHistory: function ({ value }: { value: any }) {
      const history: string[] = this.history;
      history.push(value);
      this.history = history;
      localStorage.setItem("menulance", JSON.stringify({ history }));
    },
    setLocalWordTranslations: function ({ value }: { value: any }) {
      const localWordTranslations: string[] = this.localWordTranslations;
      localWordTranslations.push(value);
      this.localWordTranslations = localWordTranslations;
      localStorage.setItem(
        "menulance",
        JSON.stringify({ localWordTranslations }),
      );
    },
  },
});
