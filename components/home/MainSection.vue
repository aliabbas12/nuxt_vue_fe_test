<script setup>
import SelectLanguage from "~/components/home/main-section/SelectLanguage.vue";
import TextInput from "~/components/home/main-section/TextInput.vue";
import NextButton from "~/components/home/general/NextButton.vue";
import MainOptions from "~/components/home/main-section/MainOptions.vue";
</script>

<template>
  <div class="pt-[15rem] flex flex-col items-center justify-center">
    <div class="container w-1/4">
      <SelectLanguage />
    </div>
    <div class="container w-5/12">
      <TextInput />
    </div>
    <div class="container w-1/4 mt-[2rem]">
      <MainOptions />
    </div>
    <div class="container w-1/12 my-10 text-center">
      <NextButton />
    </div>
  </div>
</template>

<style scoped lang="scss">
.language-section {
  margin-top: 90px;
}
</style>
