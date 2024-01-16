import { defineStore } from "pinia";
import { type WordData } from "~/interfaces/wordTranslation";
import { type TranslationPopOverType } from "~/global/enums/translationPopOverType";
interface proTips {
  type: TranslationPopOverType;
  data: WordData;
}
export const proTips = defineStore("protips", {
  state: () => {
    return {
      tips: [] as proTips[],
    };
  },
  getters: {
    getProTipsState: (state) => state.tips,
  },
  actions: {
    updateTipsState: function ({ value }: { value: proTips[] }) {
      this.tips = value;
    },
    removeTip: function ({ value }: { value: WordData }) {
      this.tips = this.tips.filter((item) => item.data.word !== value.word);
    },
  },
});
