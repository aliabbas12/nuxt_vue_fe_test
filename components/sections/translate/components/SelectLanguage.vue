<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const language = ref("english");
const languages = [
  { value: "english", label: "english" },
  { value: "italian", label: "italian" },
  { value: "spanish", label: "spanish" },
];
</script>

<template>
  <div>
    <UButton
      size="lg"
      color="white"
      square
      variant="soft"
      block
      class="h-12 px-0 py-0 bg-primary-bg text-base"
      @click="isOpen = true"
      >{{ language.toUpperCase() }}</UButton
    >
    <UModal v-model="isOpen" class="w-[448px]">
      <div class="flex items-center justify-between">
        <div></div>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          class="my-2 mx-2"
          @click="isOpen = false"
        />
      </div>
      <div
        class="p-4 h-[448px] w-full flex flex-col items-center justify-center px-8"
      >
        <div class="mb-[30px] -mt-[45px]">Choose an input language</div>
        <URadio
          v-for="lang of languages"
          :key="lang.value"
          v-model="language"
          v-bind="lang"
          :ui="{
            strategy: 'override',
            wrapper:
              'relative mx-[20px] w-full flex items-start py-[28px] px-[25px] my-[10px] border-2 rounded-3xl',
          }"
        />
      </div>
    </UModal>
    <UDivider
      class="mt-0"
      :ui="{
        strategy: 'override',
        border: { base: 'flex border-gray-600 dark:border-gray-800' },
      }"
    />
  </div>
</template>

<style lang="scss">
.select-language {
  span {
    width: 100%;
  }
}
</style>
