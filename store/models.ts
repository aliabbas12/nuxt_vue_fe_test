import { defineStore } from "pinia";

export const useModelStore = defineStore("models", {
  state: () => {
    return {
      isSelectLanguageModelOpen: false,
      isIssueModelOpen: false,
      isHaveMoreThenTwoIssueModelOpen: false,
      isSuccessModelOpen: false,
    };
  },
  getters: {
    getSelectedLanguageModelState: (state) => state.isSelectLanguageModelOpen,
    getSuccessModelState: (state) => state.isSuccessModelOpen,
    getIssueModelState: (state) => state.isIssueModelOpen,
    getMoreThenTwoIssuesModelState: (state) =>
      state.isHaveMoreThenTwoIssueModelOpen,
  },
  actions: {
    setSelectLanguageModelValue(value: boolean) {
      this.isSelectLanguageModelOpen = value;
    },
    setIssueModelState(value: boolean) {
      this.isIssueModelOpen = value;
    },
    setSuccessModelState(value: boolean) {
      this.isSuccessModelOpen = value;
    },
    setMoreThenTwoIssuesModelState(value: boolean) {
      this.isHaveMoreThenTwoIssueModelOpen = value;
    },
  },
});
