<script setup>
import SelectLanguage from "~/components/home/main-section/SelectLanguage.vue";
import TextInput from "~/components/home/main-section/TextInput.vue";
import NextButton from "~/components/home/general/NextButton.vue";
import MainOptions from "~/components/home/main-section/MainOptions.vue";
</script>

<template>
  <div class="pt-[15rem] flex flex-col items-center justify-center">
    <div class="container w-4/6 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-1/4" >
      <SelectLanguage />
    </div>
    <div class="container w-4/6 sm:w-7/12 md:w-7/12 lg:w-5/12">
      <TextInput />
    </div>
    <div class="container w-4/6 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-1/4 mt-[2rem]">
      <MainOptions />
    </div>
    <div class="container w-2/6 sm:w-1/6 md:w-2/12 lg:w-2/12 w-1 my-10 text-center">
      <NextButton />
    </div>
  </div>
</template>

<style scoped lang="scss">
.language-section {
  margin-top: 90px;
}
</style>
