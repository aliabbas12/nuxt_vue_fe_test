<script setup lang="ts">
import { ref } from "vue";
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

const store = useTranslationStore();

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
  Object.entries(staticTranslations).forEach(([key, value]) => {
    const index = value.findIndex((e) => e.word === token);
    if (index !== -1) {
      translationFound = true;
      const wordDetails = value[index];
      const { translations } = wordDetails;
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

  console.log(translationsPopUps, "translationsPopUps");
}
</script>

<template>
  <div
    class="flex h-full flex-col absolute bg-transparent w-3/12 right-0 top-0 justify-center"
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
