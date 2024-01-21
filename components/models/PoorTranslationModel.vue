<script setup lang="ts">
import { computed } from "vue";
import NextButton from "~/components/general/NextButton.vue";
import { useModelStore } from "~/store/models";

const modelStore = useModelStore();
const isOpenTranslationWithIssueMoreThenTwoModel = computed({
  get: () => modelStore.getMoreThenTwoIssuesModelState,
  set: (value) => {
    modelStore.setMoreThenTwoIssuesModelState(value);
  },
});
</script>

<template>
  <div>
    <UModal
      v-model="isOpenTranslationWithIssueMoreThenTwoModel"
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
          divide: 'divide-y divide-gray-100 dark:divide-gray-800 relative',
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
            @click="isOpenTranslationWithIssueMoreThenTwoModel = false"
          />
        </div>
        <div class="w-full flex justify-center items-center flex-col py-3">
          <UAvatar
            src="/icons/poor_translation.svg"
            class="h-full"
            :ui="{
              strategy: 'override',
              size: {
                '3xl': 'h-full w-full px-[3rem] py-[2.5rem] text-3xl',
              },
              rounded: 'rounded-none',
            }"
            size="2xl"
          />
          <p class="py-5 px-10 lg:px-28 text-[16px] text-center">
            Ooh! Unverified words may cause a poor translation.
          </p>
          <div class="my-4 w-full text-center flex justify-center items-center">
            <NextButton
              class="w-2/6"
              @call-event="isOpenTranslationWithIssueMoreThenTwoModel = false"
            />
          </div>
          <u-checkbox
            variant="outline"
            size="2xl"
            :ui="{
              strategy: 'overide',
            }"
            checkbox-class="h-16 rounded-medium bg-secondary-bg px-3"
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
