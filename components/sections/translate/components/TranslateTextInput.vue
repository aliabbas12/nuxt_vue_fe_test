<script setup lang="ts">
import { computed, watch } from "vue";

import { useTranslationStore } from "~/store/translation";
import { useGeneralStore } from "~/store/general";

const store = useTranslationStore();
const generalStore = useGeneralStore();
const isLimitExceeded = ref(false);
const accentGroup = ref(["à", "è", "é", "ì", "ò", "ù"]);

const textSizeAccordingToLength = computed(() => {
  if (text.value.length > 60 && text.value.length < 120) {
    return "text-4xl";
  } else if (text.value.length >= 120) {
    return "text-3xl";
  } else return "text-5xl";
});

const selectedLanguage = computed({
  get: () => generalStore.getSelectedLanguageState,
  set: (value) => {
    generalStore.setSelectedLanguageState(value);
  },
});
const isListening = computed({
  get: () => generalStore.getListeningState,
  set: (value) => {
    generalStore.setListeningState(value);
  },
});

const text = computed({
  get: () => store.text,
  set: (value) => {
    store.addText(value);
  },
});

watch(text, (value) => {
  if (value.length >= 160) {
    isLimitExceeded.value = true;
    if (value.length >= 160) {
      text.value = text.value.slice(0, 160);
    }
  } else {
    isLimitExceeded.value = false;
  }
});

/**
 * const { $api } = useNuxtApp();
 *
 * const SearchText = reactive({
 *   text: String,
 * });
 * function handleSubmit() {
 *   try {
 *     const credentials = {
 *       text: SearchText.text,
 *     };
 *
 *     const response = await $api.auth.login(credentials);
 *     console.log(response);
 *     // allow user access into the app
 *   } catch (error) {
 *     console.error(error);
 *   }
 * }
 */
</script>

<template>
  <div>
    <UTextarea
      v-model="text"
      variant="none"
      size="xl"
      :maxlength="160"
      :autoresize="true"
      :textarea-class="`${textSizeAccordingToLength} mb-[1rem] mt-[2rem]  text-center tracking-wider`"
      @focus="isListening = false"
    />
    <div class="w-full flex flex-auto my-3 pr-1 text-center">
      <span
        v-if="selectedLanguage !== 'en'"
        class="w-6/12 text-right tracking-wider text-primary"
      >
        <span
          v-for="(word, index) in accentGroup"
          :key="index"
          class="px-0.5 cursor-pointer"
          @click="text = text + word"
          >{{ word }}</span
        >
      </span>
      <span
        :class="` pl-3 font-light  ${
          isLimitExceeded ? 'text-red-500' : 'text-secondary'
        }  ${
          selectedLanguage !== 'en' ? 'w-6/12 text-left' : 'w-full text-center'
        }`"
      >
        {{ text.length }} / 160</span
      >
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
