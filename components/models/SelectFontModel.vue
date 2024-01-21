<script setup lang="ts">
import { computed } from "vue";
import { useGeneralStore } from "~/store/general";
import { useModelStore } from "~/store/models";
const generalStore = useGeneralStore();
const modelStore = useModelStore();

const fonts = [
  { value: "font-elsie", label: "Elsie" },
  { value: "font-heebo", label: "Heebo" },
  { value: "font-grotes", label: "Grotes" },
  { value: "font-gowun", label: "Gowun" },
  { value: "font-roboto", label: "Roboto" },
  { value: "font-prata", label: "Prata" },
];

const isOpenFontChangeModel = computed({
  get: () => modelStore.getIsOpenChangeFontModelState,
  set: (value) => {
    modelStore.setIsOpenChangeFontModelState(value);
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
      :ui="{
        rounded: 'rounded-[2.5rem]',
        overlay: {
          background: 'modal-background',
        },
        shadow: 'shadow-card',
      }"
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
            :ui="{
              strategy: 'override',
              variant: {
                ghost: 'text-{color}-500 disabled:bg-transparent ',
              },
              color: {
                gray: {
                  ghost: 'text-gray-700 dark:text-gray-200',
                },
              },
            }"
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
        </div>
      </UCard>
    </UModal>
  </div>
</template>
>

<style scoped lang="scss"></style>
