import { defineStore } from "pinia";

export const useLocalStorageService = defineStore({
  id: "localStorageService",
  state: () => ({
    history: [] as string[],
  }),
  getters: {
    getHistory: (state): any[] => {
      const storageHistory = localStorage.getItem("menulance");
      if (storageHistory !== null) {
        let { history } = JSON.parse(storageHistory);
        if (history != null) {
          // Object.assign(state.history, history);

          history = history.map((value: any) => {
            return {
              text: value.textBeforeTranslate,
              translatedText: value.textAfterTranslate,
              language: value.languageBeforeTranslate,
              translatedLanguage: value.languageAfterTranslate,
              timestamp: value.timestamp.toISOString(,
            };
          });
          state.history = history;
        }
      }
      return state.history;
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
  },
});
