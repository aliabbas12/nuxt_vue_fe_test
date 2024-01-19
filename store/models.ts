import { defineStore } from "pinia";

export const useModelStore = defineStore("models", {
  state: () => {
    return {
      isSelectLanguageModelOpen: false,
      isIssueModelOpen: false,
      isHaveMoreThenTwoIssueModelOpen: false,
      isSuccessModelOpen: false,
      isOpenChangeFontModel: false,
      isAddNewWordModelOpen: true,
      wordTranslationGoingToAdd: null as string | null,
    };
  },
  getters: {
    getSelectedLanguageModelState: (state) => state.isSelectLanguageModelOpen,
    getSuccessModelState: (state) => state.isSuccessModelOpen,
    getIssueModelState: (state) => state.isIssueModelOpen,
    getMoreThenTwoIssuesModelState: (state) =>
      state.isHaveMoreThenTwoIssueModelOpen,
    getIsOpenChangeFontModelState: (state) => state.isOpenChangeFontModel,
    getIsWordTranslationGoingToAddState: (state) =>
      state.wordTranslationGoingToAdd,
    getAddNewWordModelState: (state) => state.isAddNewWordModelOpen,
  },
  actions: {
    setSelectLanguageModelValue(value: boolean) {
      this.isSelectLanguageModelOpen = value;
    },
    setAddNewWordModelValue(value: boolean) {
      this.isAddNewWordModelOpen = value;
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
    setIsOpenChangeFontModelState(value: boolean) {
      this.isOpenChangeFontModel = value;
    },
    setWordToAddTranslation(value: string) {
      this.wordTranslationGoingToAdd = value;
    },
  },
});
