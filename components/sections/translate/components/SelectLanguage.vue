<script setup>
import { computed, ref } from "vue";
import { useGeneralStore } from "~/store/general.ts";
const isOpen = ref(false);
const generalStore = useGeneralStore();
const languages = [
  { value: "en", label: "english" },
  { value: "it", label: "italian" },
  { value: "es", label: "spanish" },
];
const autoDetect = computed({
  get: () => generalStore.getAutodetectTranslationLanguageState,
  set: (value) => {
    generalStore.setAutoDetectTranslationLanguageState(value);
  },
});

const language = computed({
  get: () => generalStore.getSelectedTranslationLanguageState,
  set: (value) => {
    generalStore.setTranslationLanguageState(value);
  },
});

const languageLabel = computed(() => {
  const index = languages.findIndex((e) => e.value === language.value);
  if (index !== -1) return languages[index].label;
  return null;
});
const width = ref("w-[449px]");
</script>

<template>
  <div>
    <UButton
      size="lg"
      color="white"
      square
      variant="soft"
      block
      class="h-12 px-0 py-0 bg-primary-bg text-normal font-normal"
      @click="isOpen = true"
      >{{ languageLabel?.toUpperCase() }}</UButton
    >
    <UModal
      v-model="isOpen"
      class="relative"
      :ui="{
        strategy: 'override',
        rounded: 'rounded-[22px]',
        background: 'bg-white',
        width: 'max-w-[453px]',
        height: 'max-h-[449px]',
      }"
    >
      <div class="absolute top-5 right-6 w-[20px] h-[20px]">
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          class="-my-1 text-gray-500 text-[12px]"
          @click="isOpen = false"
        />
      </div>
      <div class="w-full h-full flex flex-col items-center justify-center px-8">
        <p class="text-black py-[2rem]">Choose an input language</p>
        <URadio
          v-for="lang of languages"
          :key="lang.value"
          v-model="language"
          v-bind="lang"
          :ui="{
            strategy: 'override',
            wrapper:
              'relative mx-[20px] w-full flex items-start py-[21px] px-[25px] my-[10px] border border-gray-400 rounded-[22px]',
          }"
        />

        <div class="w-full flex my-6 items-center justify-start px-2">
          <UToggle
            v-model="autoDetect"
            color="primary"
            size="xl"
            :ui="{
              strategy: 'override',
              active: 'bg-success dark:bg-success',
              base: 'relative inline-flex flex-shrink-0 border-2 border-black mr-5',
              container: {
                base: 'pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200 border-solid border-2 border-black',
                size: {
                  xl: 'w-5 h-5 mt-0.5',
                },
              },
            }"
          />
          <div class="my-3">autodedect</div>
        </div>
      </div>
    </UModal>
    <UDivider
      class="mt-2"
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
