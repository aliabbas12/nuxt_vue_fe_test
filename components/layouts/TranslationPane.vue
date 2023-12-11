<script setup lang="ts">
import { ref } from "vue";
import TranslationPopOver from "../general/TranslationPopOver.vue";
const translations = ref([
  {
    text: "cannoli",
    translation: "Italian pastry",
  },
  {
    text: "alla",
    translation: "to, with",
  },
  {
    text: "forestiera",
    translation: "wild mashrooms",
  },
  {
    text: "capretto",
    translation: "baby goad",
  },
  {
    text: "cannoli",
    translation: "Italian pastry",
  },
  {
    text: "cannoli",
    translation: "Italian pastry",
  },
  {
    text: "alla",
    translation: "to, with",
  },
  {
    text: "forestiera",
    translation: "wild mashrooms",
  },
  {
    text: "capretto",
    translation: "baby goad",
  },
  {
    text: "cannoli",
    translation: "Italian pastry",
  },
]);
</script>

<template>
  <div
    class="flex h-full flex-col absolute bg-transparent w-1/4 right-0 top-0 justify-center"
  >
    <div class="overflow-y-auto inset-0 backdrop-blur-md">
      <TranslationPopOver
        v-for="(word, index) in translations"
        :key="index"
        :text="word.text"
        :translation="word.translation"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
