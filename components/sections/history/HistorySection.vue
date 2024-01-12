<script setup lang="ts">
import { computed } from "vue";
import { useLocalStorageService } from "~/localStorage";
import { TranslationPopOverType } from "~/global/enums/translationPopOverType";
const localStorageService = useLocalStorageService();

function translationLogo(type: TranslationPopOverType) {
  if (type === TranslationPopOverType.FOUND) return "verified";
  else if (type === TranslationPopOverType.NOT_FOUND) return "unknown";
  else if (type === TranslationPopOverType.NOT_VERIFIED) return "unverified";
  else return null;
}

const translationHistory = computed(() => localStorageService.getHistory);
</script>

<template>
  <div
    class="container w-4/6 sm:w-3/6 md:w-8/12 lg:w-8/12 xl:w-5/12 pt-[6rem] grid grid-cols-1 md:grid-cols-2"
  >
    <u-card
      v-for="(translation, index) in translationHistory"
      :key="index"
      class="p-0 rounded-3xl history-card col-span-1 m-[1.5rem]"
      :ui="{
        strategy: 'override',
        shadow: 'shadow-card',
        ring: 'ring-0',
        body: {
          padding: 'px-4 pt-2 pb-5',
        },
      }"
    >
      <div class="w-full flex flex-col py-5">
        <div class="text-lg">
          {{ translation.text }}
        </div>
        <div class="text-sm text-gray-500">
          {{ translation.translatedText }}
        </div>
        <div class="text-lg">
          {{ translation.language }}
        </div>
        <div class="text-sm text-gray-500">
          {{ translation.translatedLanguage }}
        </div>
        <div class="text-sm text-gray-500">
          {{ translation.timestamp }}
        </div>
      </div>
    </u-card>
    <u-card
      class="p-0 rounded-3xl history-card bg-primary-bg col-span-1 m-[1.5rem]"
      :ui="{
        strategy: 'override',
        ring: 'ring-0 border-dashed border-8 border-[#999999]',
        shadow: 'shadow-none',
        body: {
          padding: 'p-0 h-full',
        },
      }"
    >
      <div class="w-full flex items-center justify-center h-full">
        <UAvatar
          src="/icons/add_history.svg"
          class="h-full"
          :ui="{
            strategy: 'override',
            size: {
              '3xl': 'h-full w-full px-[3rem] py-[2.5rem] text-3xl',
            },
            rounded: 'rounded-none',
          }"
          size="3xl"
        />
      </div>
    </u-card>
  </div>
</template>

<style scoped lang="scss"></style>
