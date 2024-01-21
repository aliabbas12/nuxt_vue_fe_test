<script setup lang="ts">
import { computed, watch } from "vue";
import { DndProvider } from "vue3-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SelectLanguage from "~/components/sections/translate/components/SelectLanguage.vue";
import TranslateTextInput from "~/components/sections/translate/components/TranslateTextInput.vue";
import NextButton from "~/components/general/NextButton.vue";
import TranslateOptions from "~/components/sections/translate/components/TranslateOptions.vue";
import TranslationPane from "~/components/layouts/TranslationPane.vue";
import VirtualKeyboard from "~/components/general/VirtualKeyboard.vue";
import { useLocalStorageService } from "~/localStorage";
import { useTranslationStore } from "~/store/translation";
import { useModelStore } from "~/store/models";
import rice from "~/staticTranslations/rice.json";
import lamb from "~/staticTranslations/lamb.json";
import riso from "~/staticTranslations/riso.json";
import agnello from "~/staticTranslations/agnello.json";
import arroz from "~/staticTranslations/arroz.json";
import cordero from "~/staticTranslations/cordero.json";
import { TranslationIssues } from "~/global/enums/translationIssues";
const translationStore = useTranslationStore();
const localStorageService = useLocalStorageService();
const modelStore = useModelStore();
const tokens = computed(() => {
  return translationStore.getTokens;
});

const selectedLanguageForTranslation = computed({
  get: () => translationStore.getTranslationLanguageState,
  set: (value) => {
    translationStore.setTranslationLanguageState(value);
  },
});

watch(selectedLanguageForTranslation, () => {
  const dateToday = new Date();
  const data = {
    textBeforeTranslate: translationStore.getText,
    textAfterTranslate: "",
    languageBeforeTranslate: translationStore.translationLanguage,
    languageAfterTranslate: "",
    timestamp: dateToday.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
  translationStore.setTranslationButtonState(true);
  tokens.value.forEach((token) => {
    checkTranslationOfToken(token);
  });
  data.textAfterTranslate = translationStore.getText;
  data.languageAfterTranslate = translationStore.translationLanguage;
  modelStore.setSelectLanguageModelValue(false);
  localStorageService.setHistory({ value: data });
});

function translate() {
  if (issueType.value === TranslationIssues.NOT_FOUND) {
    modelStore.setSuccessModelState(true);
  } else {
    modelStore.setIssueModelState(true);
  }
}

const issueType = computed({
  get: () => translationStore.getIssuesTypeState,
  set: (value) => {
    translationStore.setIssuesTypeState(value);
  },
});

const text = computed({
  get: () => translationStore.text,
  set: (value) => {
    translationStore.addText(value);
  },
});

const issues = computed({
  get: () => translationStore.getIssues,
  set: (value) => {
    translationStore.setIssues(value);
  },
});

watch(issues, (value) => {
  if (value.length === 0) {
    issueType.value = TranslationIssues.NOT_FOUND;
  } else if (value.length === 1) {
    issueType.value = TranslationIssues.ONE;
  } else if (value.length === 2) {
    issueType.value = TranslationIssues.TWO;
  } else {
    issueType.value = TranslationIssues.THREE_OR_MORE;
  }
});

const staticTranslations = {
  en: [rice, lamb],
  it: [riso, agnello],
  es: [arroz, cordero],
};
function checkTranslationOfToken(token: string) {
  const wordSpan = document.getElementById("individual-" + token);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(staticTranslations).forEach(([key, value]) => {
    const index = value.findIndex((e) => e.word === token);
    if (index !== -1) {
      const wordDetails = value[index];
      const { translations } = wordDetails;

      const italianTranslationIndex = translations.findIndex(
        (e) => e.code === selectedLanguageForTranslation.value,
      );
      if (italianTranslationIndex !== -1 && wordSpan != null) {
        text.value = text.value.replace(
          token,
          translations[italianTranslationIndex].word,
        );
      }
    }
  });
}
const translateBtnSound = "/sounds/loud/button-click.mp3";
const handleSound = () => {
  const audio = new Audio(translateBtnSound);
  audio.play();
};
</script>

<template>
  <div
    class="relative w-[80%] md:w-[94%] mx-auto pt-[3rem] md:pt-[6rem] lg:pt-[16rem] flex flex-col h-screen"
  >
    <DndProvider :backend="HTML5Backend">
      <div class="container w-[300px]">
        <SelectLanguage class="" />
        <VirtualKeyboard class="absolute bottom-0 left-0 w-full -ml-[20px]" />
      </div>
      <div class="container w-5/6 sm:w-7/12 md:w-4/12 lg:w-5/12">
        <TranslateTextInput />
      </div>
      <div class="container w-[300px] mt-[14px]">
        <TranslateOptions />
      </div>
      <div class="md:px-5">
        <TranslationPane />
      </div>
      <div
        class="container w-3/6 sm:w-1/6 md:w-2/12 lg:w-2/12 my-10 text-center"
      >
        <NextButton
          v-if="text.length"
          :text="$t('button.translate')"
          @click="handleSound"
          @call-event="translate"
        />
      </div>
    </DndProvider>
  </div>
</template>

<style scoped lang="scss">
.language-section {
  margin-top: 90px;
}
</style>
