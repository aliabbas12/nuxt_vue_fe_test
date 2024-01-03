<script setup lang="ts">
import NextButton from "~/components/general/NextButton.vue";
</script>
<template>
  <div
    class="container md:w-3/6 lg:w-4/6 xl:w-3/6 md:pt-[5rem] lg:pt-[6rem] text-center flex flex-col items-center justify-center"
  >
    <div class="text-3xl mb-16 mt-10 lg:mt-0 md:mb-12 lg:mb-10">email us</div>
    <div class="w-3/4 lg:w-2/4 flex flex-col">
      <u-input
        variant="outline"
        placeholder="first name"
        size="3xl"
        class="my-2 lg:my-4"
        input-class="rounded-2xl h-16 bg-secondary-bg"
      />
      <u-input
        variant="outline"
        placeholder="last name"
        size="3xl"
        class="my-2 lg:my-4"
        input-class="rounded-2xl h-16 bg-secondary-bg"
      />
      <u-input
        variant="outline"
        placeholder="email"
        size="3xl"
        class="my-2 lg:my-4"
        input-class="rounded-2xl h-16 bg-secondary-bg"
      />
      <u-textarea
        variant="outline"
        placeholder="message"
        size="3xl"
        class="my-2 lg:my-4"
        textarea-class="rounded-2xl p-3 h-[150px] lg:h-[200px] xl:h-[220px]  bg-secondary-bg"
      />
      <div
        class="w-full mt-2 flex flex-col lg:mt-12 items-center justify-center"
      >
        <NextButton class="my-3" :text="'send'" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
