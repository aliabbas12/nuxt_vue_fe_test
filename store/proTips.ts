import { defineStore } from "pinia";
import { type WordData } from "~/interfaces/wordTranslation";
import { type TranslationPopOverType } from "~/global/enums/translationPopOverType";
interface proTipsType {
  type: TranslationPopOverType;
  data: WordData;
}
export const proTips = defineStore("protips", {
  state: () => {
    return {
      tips: [] as proTipsType[],
    };
  },
  getters: {
    getProTipsState: (state) => state.tips,
  },
  actions: {
    updateTipsState: function ({ value }: { value: proTipsType[] }) {
      this.tips = value;
    },
    removeTip: function (word: string) {
      const index = this.tips.findIndex((e) => e.data.word === word);
      if (index !== -1) {
        this.tips.splice(index, 1);
      }
      // this.tips = this.tips.filter((item) => item.data.word !== value.word);
    },
  },
});
