<script setup>
import { computed, watch } from "vue";
import { useTranslationStore } from "~/store/translation.ts";
import { useGeneralStore } from "~/store/general.ts";
const translationStore = useTranslationStore();
const generalStore = useGeneralStore();
const listeningState = computed(() => generalStore.getListeningState);
const translationText = computed(() => translationStore.getText);
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.lang = "en-US"; // Set the language as needed

watch(listeningState, (value) => {
  if (value) {
    console.log("listening start");
    recognition.start();
  } else {
    console.log("listening stop");
    recognition.stop();
  }
});

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  translationStore.addText(translationText.value + transcript);
};
</script>

<template>
  <span />
</template>

<style scoped lang="scss"></style>
