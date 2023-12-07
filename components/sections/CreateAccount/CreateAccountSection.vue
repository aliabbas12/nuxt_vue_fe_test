<script setup lang="ts">
import NextButton from "~/components/general/NextButton.vue";
const viewport = useViewport();
</script>

<template>
  <div
    class="container lg:w-4/6 xl:w-3/6 pt-[6rem] text-center flex flex-col items-center justify-center"
  >
    <div class="text-3xl">create a free account</div>
    <div class="text-sm leading-6 m-8 lg:m-14">
      <div>uis aute irure dolor in reprehenderit in voluptate</div>
      <div>velit esse cillum dolore eu fugiat nulla pariatur</div>
      <div>Excepteur sint occaecat cupidatat non proident</div>
      <div>sunt in culpa qui officia deserunt mollit</div>
      <div>anim id est laborum</div>
      <div>velit esse cillum dolore eu fugiat nulla pariatur</div>
    </div>
    <div class="w-3/4 lg:w-2/4 flex flex-col">
      <u-input
        variant="outline"
        placeholder="email"
        size="3xl"
        class="my-4"
        input-class="rounded-2xl h-14 bg-secondary-bg"
      />
      <u-input
        variant="outline"
        placeholder="password"
        type="password"
        size="3xl"
        class="my-4"
        input-class="rounded-2xl h-14 bg-secondary-bg"
      />
      <UCheckbox label="you agree to our terms and conditions" />
      <div class="w-full flex flex-col items-center justify-center">
        <NextButton class="w-2/6 my-3" />
      </div>
      <UDivider
        class="mt-4"
        :ui="{
          strategy: 'override',
          border: { base: 'flex border-gray-600 dark:border-gray-800' },
        }"
      />
      <div class="text-secondary text-sm m-8">or continue with</div>
      <div class="w-full">
        <UAvatar
          src="/icons/facebook.svg"
          class="rounded-none mx-3"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
          }"
          :size="viewport.isLessThan('tablet') ? 'lg' : '2xl'"
        />
        <UAvatar
          src="/icons/google.svg"
          class="rounded-none mx-3"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
          }"
          :size="viewport.isLessThan('tablet') ? 'lg' : '2xl'"
        />
        <UAvatar
          src="/icons/linkedin.svg"
          class="rounded-none mx-3"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
          }"
          :size="viewport.isLessThan('tablet') ? 'lg' : '2xl'"
        />
      </div>
      <div>got an account? sign in</div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
