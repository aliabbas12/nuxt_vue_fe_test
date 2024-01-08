<script setup lang="ts">
import { computed, watch } from "vue";

import { useTranslationStore } from "~/store/translation";
import { useGeneralStore } from "~/store/general";
const viewport = useViewport();

const store = useTranslationStore();
const generalStore = useGeneralStore();
const isLimitExceeded = ref(false);
const accentGroup = ref(["à", "è", "é", "ì", "ò", "ù"]);
const inputDiv = ref(null);
const timeoutId = ref(null);

const textSizeAccordingToLength = computed(() => {
  if (viewport.isLessThan("tablet")) {
    if (text.value.length > 40 && text.value.length < 80) {
      return "text-3xl";
    } else if (text.value.length >= 80 && text.value.length < 120) {
      return "text-2xl";
    } else if (text.value.length >= 120) {
      return "text-xl";
    } else return "text-4xl";
  } else if (text.value.length > 50 && text.value.length < 100) {
    return "text-4xl";
  } else if (text.value.length >= 100 && text.value.length < 150) {
    return "text-3xl";
  } else if (text.value.length >= 120) {
    return "text-2xl";
  } else return "text-5xl";
});

const selectedLanguage = computed({
  get: () => generalStore.getSelectedTranslationLanguageState,
  set: (value) => {
    generalStore.setTranslationLanguageState(value);
  },
});
const isListening = computed({
  get: () => generalStore.getListeningState,
  set: (value) => {
    generalStore.setListeningState(value);
  },
});

const createTokensOfString = (str: String) => {
  store.setToken([]);
  const tempTokens: string[] = [];
  const contenteditableDiv = document.getElementById("inputTextBox");
  if (str === "") {
    return;
  }
  const regex = /[^a-zA-Z-]/g;
  const wordsWithSpan = str
    .split(" ")
    .map((word: string) => {
      tempTokens.push(word.replace(regex, ""));
      return `<span id="individual-${word.replace(regex, "")}">${word}</span>`;
    })
    .join(" ");

  store.setToken(tempTokens);

  if (contenteditableDiv != null) {
    contenteditableDiv.innerHTML = wordsWithSpan;
    moveCursorToEnd();
  }
};

const handleInput = (event) => {
  text.value = event.target.innerText;
};

const text = computed({
  get: () => {
    const text = store.text;
    const contenteditableDiv = document.getElementById("inputTextBox");
    if (contenteditableDiv != null) {
      contenteditableDiv.innerHTML = text;
      moveCursorToEnd();
    }
    return text;
  },
  set: (value) => {
    store.addText(value);
  },
});

const moveCursorToEnd = () => {
  if (inputDiv?.value != null) {
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(inputDiv.value);
    range.collapse(false); // Move range to end
    if (selection !== null) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
};

watch(text, (value) => {
  if (value === "") {
    createTokensOfString(value);
  }
  if (timeoutId.value !== null) {
    clearTimeout(timeoutId.value);
  }
  timeoutId.value = setTimeout(() => {
    createTokensOfString(value);
  }, 3000);
  if (value.length >= 160) {
    isLimitExceeded.value = true;
    if (value.length >= 160) {
      text.value = text.value.slice(0, 160);
    }
  } else {
    isLimitExceeded.value = false;
  }
});

const selectedWord = computed({
  get: () => {
    return store.getSelectedWord;
  },
  set: (value) => {
    store.setSelectedWord(value);
  },
});

function selectWordOnClick(event) {
  if (event.target.tagName === "SPAN") {
    if (event.target.textContent) {
      const regex = /[^a-zA-Z-]/g;
      const word = event.target.textContent.replace(regex, "");
      selectedWord.value = word === selectedWord.value ? "" : word;
    }
  }
}

const currentFontSelected = computed({
  get: () => generalStore.getCurrentTextFontState,
  set: (value) => {
    generalStore.setCurrentTextFontState(value);
  },
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
    <div
      id="inputTextBox"
      ref="inputDiv"
      contenteditable="true"
      :class="`${textSizeAccordingToLength} mb-[1rem] mt-[2rem]  text-center h-[12rem] ${currentFontSelected} font-light`"
      @focus="isListening = false"
      @input="handleInput"
      @click="selectWordOnClick"
    ></div>
    <div
      class="w-full flex flex-auto my-3 pr-1 text-center text-normal font-normal"
    >
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
