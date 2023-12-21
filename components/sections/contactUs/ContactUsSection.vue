<script setup lang="ts">
import NextButton from "~/components/general/NextButton.vue";
</script>
<template>
  <div
    class="container lg:w-4/6 xl:w-3/6 lg:py-[6rem] py-4 text-center flex flex-col items-center justify-center"
  >
    <div class="text-3xl mt-10 lg:mt-0 lg:mb-10">email us</div>
    <div class="w-3/4 lg:w-2/4 flex flex-col">
      <u-input
        variant="outline"
        placeholder="first name"
        size="3xl"
        class="my-4"
        input-class="rounded-2xl h-16 bg-secondary-bg"
      />
      <u-input
        variant="outline"
        placeholder="last name"
        size="3xl"
        class="my-4"
        input-class="rounded-2xl h-16 bg-secondary-bg"
      />
      <u-input
        variant="outline"
        placeholder="email"
        size="3xl"
        class="my-4"
        input-class="rounded-2xl h-16 bg-secondary-bg"
      />
      <u-textarea
        variant="outline"
        placeholder="message"
        size="3xl"
        class="my-4"
        textarea-class="rounded-2xl bg-secondary-bg h-[100px] lg:h-[250px]"
      />
      <div class="w-full flex flex-col lg:mt-12 items-center justify-center">
        <NextButton class="w-2/6 mb-10 lg:mb-0 lg:my-3" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
