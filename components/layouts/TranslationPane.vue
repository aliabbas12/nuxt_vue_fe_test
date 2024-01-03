<script setup lang="ts">
import { ref, computed } from "vue";
import TranslationPopOver from "../general/TranslationPopOver.vue";
import rice from "../../staticTranslations/rice.json";
import agnello from "../../staticTranslations/agnello.json";
import cordero from "../../staticTranslations/cordero.json";
import lamb from "../../staticTranslations/lamb.json";
import arroz from "../../staticTranslations/arroz.json";
import riso from "../../staticTranslations/riso.json";
import { TranslationPopOverType } from "~/global/enums/translationPopOverType";
import { useTranslationStore } from "~/store/translation";
import type { TranslationData, WordData } from "~/interfaces/wordTranslation";
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
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
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
      // eslint-disable-next-line camelcase
      const { translations, lang_code } = wordDetails;
      if (!languageSet && isAutoDetectOn.value) {
        generalStore.setTranslationLanguageState(lang_code);
        languageSet = true;
      }
      if (translations?.length !== 0) {
        for (let i = 0; i < translations.length; i++) {
          const wordData: WordData = {
            word: token,
          };
          const { code, word } = translations[i];
          const translationIndex = staticTranslations[code].findIndex(
            (e: TranslationData) => e.word === word,
          );
          if (translationIndex !== -1) {
            // eslint-disable-next-line camelcase
            const { etymology_text, categories, word, sounds } =
              staticTranslations[code][translationIndex];
            // eslint-disable-next-line camelcase
            wordData.meaning = etymology_text;
            wordData.translation = word;
            wordData.categories = categories;
            wordData.sound = sounds;
            wordsTranslations.value.push({
              type: TranslationPopOverType.FOUND,
              data: wordData,
            });
          }
        }
      }
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
    class="flex md:h-full flex-col sm:relative sm:overflow-y-auto max-h-[250px] sm:w-6/6 md:absolute bg-transparent md:w-3/12 md:right-0 md:top-0 justify-center"
  >
    <div :key="tokens.length" class="overflow-y-auto inset-0 backdrop-blur-md">
      <TranslationPopOver
        v-for="(word, index) in translationsPopUps"
        :key="index"
        :data="word.data"
        :type="word.type"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
