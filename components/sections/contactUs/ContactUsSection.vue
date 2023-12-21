<script setup lang="ts">
import NextButton from "~/components/general/NextButton.vue";
</script>
<template>
  <div
    class="container lg:w-4/6 xl:w-3/6 pt-[6rem] text-center flex flex-col items-center justify-center"
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
        rows="8"
        size="3xl"
        class="my-4"
        textarea-class="rounded-2xl bg-secondary-bg"
      />
      <div class="w-full flex flex-col lg:mt-12 items-center justify-center">
        <NextButton class="my-3" :text="'send'" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
