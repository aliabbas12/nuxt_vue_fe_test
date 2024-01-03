<script setup>
import { computed } from "vue";
import SelectLanguage from "~/components/sections/translate/components/SelectLanguage.vue";
import TranslateTextInput from "~/components/sections/translate/components/TranslateTextInput.vue";
import NextButton from "~/components/general/NextButton.vue";
import TranslateOptions from "~/components/sections/translate/components/TranslateOptions.vue";
import TranslationPane from "~/components/layouts/TranslationPane.vue";
import VirtualKeyboard from "~/components/general/VirtualKeyboard.vue";
import { useTranslationStore } from "~/store/translation";
import rice from "~/staticTranslations/rice.json";
import lamb from "~/staticTranslations/lamb.json";
import riso from "~/staticTranslations/riso.json";
import agnello from "~/staticTranslations/agnello.json";
import arroz from "~/staticTranslations/arroz.json";
import cordero from "~/staticTranslations/cordero.json";
const translationStore = useTranslationStore();
const tokens = computed(() => {
  return translationStore.getTokens;
});
function translate() {
  tokens.value.forEach((token) => {
    checkTranslationOfToken(token);
  });
}
const staticTranslations = {
  en: [rice, lamb],
  it: [riso, agnello],
  es: [arroz, cordero],
};
function checkTranslationOfToken(token) {
  const wordSpan = document.getElementById("individual-" + token);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(staticTranslations).forEach(([key, value]) => {
    const index = value.findIndex((e) => e.word === token);
    if (index !== -1) {
      const wordDetails = value[index];
      const {
        // eslint-disable-next-line camelcase
        lang_code,
        translations,
      } = wordDetails;

      const italianTranslationIndex = translations.findIndex(
        (e) =>
          // eslint-disable-next-line camelcase
          e.code === (lang_code === "en" ? "it" : "en"),
      );
      if (italianTranslationIndex !== -1 && wordSpan != null) {
        wordSpan.innerText = translations[italianTranslationIndex].word;
        wordSpan.id = "individual-" + token;
      }
    }
  });
}
</script>

<template>
  <div
    class="relative w-[80%] md:w-[94%] mx-auto pt-[3rem] md:pt-[6rem] lg:pt-[15rem] flex flex-col h-screen"
  >
    <div class="container w-5/6 sm:w-6/12 md:w-4/12 lg:w-4/12 xl:w-1/4">
      <SelectLanguage class="" />
      <VirtualKeyboard class="absolute bottom-0 left-0 w-full -ml-[20px]" />
    </div>
    <div class="container w-5/6 sm:w-7/12 md:w-4/12 lg:w-5/12">
      <TranslateTextInput />
    </div>
    <div
      class="container w-5/6 sm:w-6/12 md:w-4/12 lg:w-4/12 xl:w-1/4 mt-[2rem]"
    >
      <TranslateOptions />
    </div>
    <div class="md:px-5">
      <TranslationPane />
    </div>
    <div class="container w-3/6 sm:w-1/6 md:w-2/12 lg:w-2/12 my-10 text-center">
      <NextButton :text="$t('button.translate')" @call-event="translate" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.language-section {
  margin-top: 90px;
}
</style>
