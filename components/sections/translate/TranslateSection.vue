<script setup>
import SelectLanguage from "~/components/sections/translate/components/SelectLanguage.vue";
import TranslateTextInput from "~/components/sections/translate/components/TranslateTextInput.vue";
import NextButton from "~/components/general/NextButton.vue";
import TranslateOptions from "~/components/sections/translate/components/TranslateOptions.vue";
import TranslationPane from "~/components/layouts/TranslationPane.vue";
</script>

<template>
  <div class="relative pt-[15rem] flex flex-col h-screen">
    <TranslationPane />
    <div class="container w-4/6 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-1/4">
      <SelectLanguage />
    </div>
    <div class="container w-4/6 sm:w-7/12 md:w-7/12 lg:w-5/12">
      <TranslateTextInput />
    </div>
    <div
      class="container w-4/6 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-1/4 mt-[2rem]"
    >
      <TranslateOptions />
    </div>
    <div class="container w-3/6 sm:w-1/6 md:w-2/12 lg:w-2/12 my-10 text-center">
      <NextButton text="translate" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.language-section {
  margin-top: 90px;
}
</style>
