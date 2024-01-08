<script setup lang="ts">
import { computed, ref } from "vue";
import { useGeneralStore } from "~/store/general";

const fonts = [
  { value: "font-elsie", label: "Elsie" },
  { value: "font-heebo", label: "Heebo" },
  { value: "font-grotes", label: "Grotes" },
  { value: "font-gowun", label: "Gowun" },
  { value: "font-roboto", label: "Roboto" },
  { value: "font-prata", label: "Prata" },
];

const generalStore = useGeneralStore();
const isOpenFontChangeModel = computed({
  get: () => generalStore.getIsOpenChangeFontModelState,
  set: (value) => {
    generalStore.setIsOpenChangeFontModelState(value);
  },
});
const currentFontSelected = computed({
  get: () => generalStore.getCurrentTextFontState,
  set: (value) => {
    generalStore.setCurrentTextFontState(value);
  },
});
</script>

<template>
  <div>
    <UModal
      v-model="isOpenFontChangeModel"
      :ui="{ rounded: 'rounded-[2.5rem]' }"
    >
      <UCard
        :ui="{
          ring: '',

          divide: 'divide-y divide-gray-100 dark:divide-gray-800 relative px-5',
        }"
      >
        <div
          class="absolute top-5 right-5 text-sm cursor-pointer text decoration-0"
        >
          <u-button
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpenFontChangeModel = false"
          />
        </div>
        <div class="w-full flex justify-center items-center flex-col py-3">
          <UAvatar
            src="/icons/font.svg"
            class="rounded-none cursor-pointer"
            :ui="{
              strategy: 'override',
              size: {
                '3xl': 'h-full w-5/6 text-3xl',
              },
              rounded: 'rounded-none',
            }"
            size="2xl"
          />
          <p class="py-5 px-24 text-center">Choose Font on text</p>
          <u-select
            v-model="currentFontSelected"
            variant="outline"
            placeholder="Choose Font"
            :options="fonts"
            size="3xl"
            class="my-4 w-full"
            select-class="rounded-3xl h-16 text-gray-500 bg-secondary-bg px-3"
          >
            <template #trailing>
              <u-icon
                name="ph:caret-up-down-fill"
                dynamic
                class="text-gray-500 h-[2rem] text-[15px]"
                size="sm"
              />
            </template>
          </u-select>
          <u-checkbox
            variant="outline"
            size="2xl"
            :ui="{
              strategy: 'overide',
            }"
            class="mt-5"
            checkbox-class="h-16  rounded-medium bg-black px-3"
            @change="isOpenFontChangeModel = false"
          >
            <template #label>
              <span class="text-[15px] font-light">Don't show this again</span>
            </template>
          </u-checkbox>
        </div>
      </UCard>
    </UModal>
  </div>
</template>
>

<style scoped lang="scss"></style>
