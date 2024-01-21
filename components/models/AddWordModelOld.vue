<script setup lang="ts">
import { computed, type Ref, ref, watch } from "vue";
import NextButton from "~/components/general/NextButton.vue";
import { useModelStore } from "~/store/models";
import type { TranslationData } from "~/interfaces/wordTranslation";
const modelStore = useModelStore();

const value = ref([]);
const wordTranslation: Ref<TranslationData> = ref({
  lang: null,
  word: "",
  etymology_text: "",
  translations: [
    {
      word: "",
      code: null,
    },
  ],
  categories: [],
});
const options = ref([]);
const languages = [
  { value: "en", label: "english" },
  { value: "it", label: "italian" },
  { value: "es", label: "spanish" },
];

const isWordAddedForTranslationModel = computed({
  get: () => modelStore.getIsWordTranslationGoingToAddState,
  set: (value) => {
    modelStore.setWordToAddTranslation(value);
  },
});
const isModelOpen = computed(() => {
  return isWordAddedForTranslationModel.value !== null;
});
watch(isWordAddedForTranslationModel, (value) => {
  if (value != null) {
    wordTranslation.value.word = value;
  }
});
function addTag(newTag: string) {
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
  };
  options.value.push(tag);
  wordTranslation.value.categories.push(tag);
}
</script>

<template>
  <div>
    <UModal
      v-model="isModelOpen"
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
            class="-my-1"
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
            @click="isWordAddedForTranslationModel = null"
          />
        </div>
        <div class="w-full flex justify-center items-center flex-col py-3">
          <p class="py-5 px-10 lg:px-28 text-[15px] text-center">
            Add word Translation
          </p>
          <div
            class="my-4 w-full text-center flex justify-center flex-col items-center"
          >
            <u-input
              v-model="isWordAddedForTranslationModel"
              variant="outline"
              placeholder="ant.count@yahoo"
              size="3xl"
              class="my-4 w-full"
              input-class="rounded-2xl h-16 bg-secondary-bg text-center"
            />
            <u-select
              v-model="wordTranslation.lang_code"
              variant="outline"
              placeholder="Choose word language"
              :options="languages"
              size="3xl"
              class="my-4 w-full"
              select-class="rounded-2xl h-16 text-gray-500 bg-secondary-bg px-3 text-sm text-secondary text-center"
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
            <u-select
              v-model="wordTranslation.translations[0].code"
              variant="outline"
              placeholder="Choose word translation language"
              :options="languages"
              size="3xl"
              class="my-4 w-full"
              select-class="rounded-2xl h-16 text-gray-500 bg-secondary-bg px-3 text-sm text-secondary text-center"
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
            <u-input
              v-model="wordTranslation.translations[0].word"
              variant="outline"
              placeholder="translation"
              size="3xl"
              class="my-4 w-full"
              input-class="rounded-2xl h-16 bg-secondary-bg text-center"
            >
            </u-input>
            <div class="w-full my-4">
              <VueMultiselect
                v-model="wordTranslation.categories"
                class="select-category"
                placeholder="Add a category"
                label="name"
                track-by="code"
                :multiple="true"
                :taggable="true"
                :options="options"
                @tag="addTag"
              ></VueMultiselect>
            </div>
            <NextButton class="w-2/6" />
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>
>

<style scoped lang="scss"></style>
