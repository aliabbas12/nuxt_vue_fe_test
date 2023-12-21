<script setup lang="ts">
import { ref } from "vue";
import TranslationPopOver from "../general/TranslationPopOver.vue";
import { TranslationPopOverType } from "~/global/enums/translationPopOverType";

const translations = ref([
  {
    text: "cannoli",
    translation: "Italian pastry",
    type: TranslationPopOverType.FOUND,
  },
  {
    text: "May be you know how to translate this word. Provide us a translation and we will try adding it to our dictionary.",
    translation: "",
    type: TranslationPopOverType.BASIC,
  },
  {
    text: "forestiera",
    translation: "wild mashrooms",
    type: TranslationPopOverType.NOT_FOUND,
  },
  {
    text: "capretto",
    translation: "baby goad",
    type: TranslationPopOverType.FOUND,
  },
  {
    text: "cannoli",
    translation: "Italian pastry",
    type: TranslationPopOverType.NOT_FOUND,
  },
]);
</script>

<template>
  <div
    class="flex h-full flex-col absolute bg-transparent w-3/12 right-0 top-0 justify-center"
  >
    <div class="overflow-y-auto inset-0 backdrop-blur-md">
      <TranslationPopOver
        v-for="(word, index) in translations"
        :key="index"
        :text="word.text"
        :translation="word.translation"
        :type="word.type"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
