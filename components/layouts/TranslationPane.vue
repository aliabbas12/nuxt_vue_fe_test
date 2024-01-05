<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import TranslationPopOver from "../general/TranslationPopOver.vue";
import rice from "../../staticTranslations/rice.json";
import agnello from "../../staticTranslations/agnello.json";
import cordero from "../../staticTranslations/cordero.json";
import lamb from "../../staticTranslations/lamb.json";
import arroz from "../../staticTranslations/arroz.json";
import riso from "../../staticTranslations/riso.json";
import { TranslationPopOverType } from "~/global/enums/translationPopOverType";
import { useTranslationStore } from "~/store/translation";
import type { WordData } from "~/interfaces/wordTranslation";
import { useGeneralStore } from "~/store/general";

const store = useTranslationStore();
const generalStore = useGeneralStore();

let languageSet = false;

const isAutoDetectOn = computed(
  () => generalStore.getAutodetectTranslationLanguageState,
);

const staticTranslations = {
  en: [rice, lamb],
  it: [riso, agnello],
  es: [arroz, cordero],
};

const wordsTranslations = ref<
  Array<{
    type: TranslationPopOverType;
    data: WordData;
  }>
>([]);

const tokens = computed(() => {
  wordsTranslations.value = [];
  languageSet = false;
  store.getTokens.forEach((token) => {
    checkTranslationOfToken(token);
  });
  return store.getTokens;
});

const translationsPopUps = computed(() => {
  return wordsTranslations.value;
});

function checkTranslationOfToken(token: string) {
  let translationFound = false;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(staticTranslations).forEach(([key, value]) => {
    const index = value.findIndex((e) => e.word === token);
    if (index !== -1) {
      translationFound = true;
      const wordDetails = value[index];

      const {
        // eslint-disable-next-line camelcase
        lang_code,
        // eslint-disable-next-line camelcase
        etymology_text,
        categories,
        sounds,
        senses,
      } = wordDetails;
      if (!languageSet && isAutoDetectOn.value) {
        generalStore.setTranslationLanguageState(lang_code);
        languageSet = true;
      }
      const wordData: WordData = {
        word: token,
      };

      if (senses?.length != null) {
        const glosses = senses[0].glosses;
        if (glosses.length >= 1) wordData.translation = glosses[0];
      }
      // eslint-disable-next-line camelcase
      wordData.meaning = etymology_text;
      wordData.categories = categories;
      wordData.sound = sounds;
      wordsTranslations.value.push({
        type: TranslationPopOverType.FOUND,
        data: wordData,
      });
    }
  });
  if (!translationFound) {
    wordsTranslations.value.push({
      type: TranslationPopOverType.NOT_FOUND,
      data: {
        word: token,
      },
    });
  }
}
</script>

<template>
  <div
    class="flex md:h-full md:max-h-screen flex-col sm:relative sm:overflow-y-auto max-h-[250px] sm:w-6/6 md:absolute bg-transparent md:w-4/12 lg:w-[24rem] xl:w-[29rem] 2xl:w-[33rem] md:px-3 md:right-0 md:top-0 lg:mr-[-3rem] justify-center"
  >
    <div
      id="custom-scroll"
      :key="tokens.length"
      class="overflow-y-auto inset-0"
    >
      <TranslationPopOver
        v-for="(word, index) in translationsPopUps"
        :key="index"
        :data="word.data"
        :type="word.type"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
#custom-scroll::-webkit-scrollbar {
  width: 0.1px;
}
</style>
