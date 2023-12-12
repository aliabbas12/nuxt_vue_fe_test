<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { useNuxtApp } from "#app";
import { useTranslationStore } from "~/store/translation";
import { useGeneralStore } from "~/store/general";
const { $virtualKeyboard } = useNuxtApp();
const store = useTranslationStore();
const generalStore = useGeneralStore();
let keyboard: any;

const text = computed({
  get: () => store.text,
  set: (value) => {
    store.addText(value);
  },
});

const isKeyboardOpen = computed({
  get: () => generalStore.keyboard,
  set: (value) => {
    generalStore.setKeyboardState(value);
  },
});

watch(isKeyboardOpen, (value) => {
  if (value) {
    openKeyboard();
  } else {
    closeKeybaord();
  }
});

onMounted(() => {});

function openKeyboard() {
  keyboard = new $virtualKeyboard("keyboardClass", {
    onChange,
  });
  keyboard.setInput(text.value);
}
function closeKeybaord() {
  if (keyboard != null) {
    keyboard.destroy();
    keyboard = null;
  }
}
const onChange = (input: string) => {
  text.value = input;
};
</script>

<template>
  <div>
    <div class="keyboardClass"></div>
  </div>
</template>

<style scoped lang="scss"></style>
