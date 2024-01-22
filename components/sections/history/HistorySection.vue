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
      <div class="w-full">
        <div class="my-3.5">{{ translation.textBeforeTranslate }}</div>
        <UDivider
          :ui="{
            strategy: 'override',
            border: { base: 'flex border-gray-200 ' },
          }"
        />
      </div>
      <div class="w-full">
        <div class="my-4">{{ translation.textAfterTranslate }}</div>
        <div class="my-4">{{ translation.timestamp }}</div>
        <div class="py-2">
          <span class="px-3 py-2 mr-1 rounded-full bg-primary-bg"
            >breakfast</span
          >
          <span class="px-3 py-2 mx-2 rounded-full bg-primary-bg">meat</span>
        </div>
      </div>
      <div class="w-full flex flex-row mt-6">
        <div class="flex-1">
          <UAvatar
            src="/icons/card.svg"
            class="rounded-none mr-1"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            size="xs"
          />
          <UAvatar
            src="/icons/trash.svg"
            class="rounded-none mx-1"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            size="xs"
          />
          <UAvatar
            src="/icons/notification.svg"
            class="rounded-none mx-1"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            size="xs"
          />
        </div>
        <div class="flex-none">
          <UAvatar
            :src="`/icons/${translationLogo(translation?.type)}.svg`"
            class="rounded-none"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            size="xs"
          />
        </div>
      </div>
    </u-card>
    <u-card
      class="p-0 rounded-3xl history-card bg-primary-bg col-span-1 m-[1.5rem] max-h-[230px]"
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
