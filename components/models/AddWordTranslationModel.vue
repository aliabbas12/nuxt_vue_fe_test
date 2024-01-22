<script setup lang="ts">
import { computed, ref, type Ref, watch } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { useModelStore } from "~/store/models";
import { useTranslationStore } from "~/store/translation";
import NextButton from "~/components/general/NextButton.vue";
import { useGeneralStore } from "~/store/general";
import { type TranslationData } from "~/interfaces/wordTranslation";
import { useLocalStorageService } from "~/localStorage";
const modelStore = useModelStore();
const generalStore = useGeneralStore();
const translationStore = useTranslationStore();
const localStorageService = useLocalStorageService();
const pagination = ref(HTMLElement);
const languages = [
  { value: "en", label: "english" },
  { value: "it", label: "italian" },
  { value: "es", label: "spanish" },
];
const types = [
  { value: "noun", label: "noun" },
  { value: "adj", label: "adjective" },
  { value: "verb", label: "verb" },
];

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

const isWordAddedForTranslationModel = computed({
  get: () => modelStore.getIsWordTranslationGoingToAddState,
  set: (value) => {
    modelStore.setWordToAddTranslation(value);
  },
});
const isModelOpen = computed(() => {
  return isWordAddedForTranslationModel.value !== null;
});
const wordType = computed({
  get: () => generalStore.getWordType,
  set: (value) => {
    generalStore.setSelectedWordState(value);
  },
});
const currentSlide = ref(0);
const prev = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};
const next = () => {
  if (currentSlide.value < 4) {
    const audio = new Audio("/sounds/loud/button-click-wood.mp3");
    audio.play();
    currentSlide.value++;
  }
};
watch(currentSlide, () => {
  const myEl = pagination.value.children;
  for (let i = 0; i <= currentSlide.value; i++) {
    const btn = myEl[i].querySelector(".carousel__pagination-button");
    btn.classList.add("carousel__pagination-button--active");
    console.log(btn);
  }
});
function addLocalTranslation() {
  localStorageService.setLocalWordTranslations({
    value: wordTranslation.value,
  });
  isWordAddedForTranslationModel.value = null;
}
watch(isWordAddedForTranslationModel, (value) => {
  if (value != null) {
    wordTranslation.value.word = value;
  }
});
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
        class="p-4"
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
            @click="isWordAddedForTranslationModel = null"
          />
        </div>
        <div class="flex w-full justify-center items-center flex-col">
          <UAvatar
            src="/icons/chef-at-on.svg"
            class="rounded-none mx-1"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            size="2xl"
          />

          <div class="relative flex w-full flex-col">
            <Carousel
              v-model="currentSlide"
              class="w-full relative add_word_carousel"
            >
              <template #addons>
                <Pagination ref="pagination" class="relative" />
              </template>
              <Slide :key="1">
                <div
                  class="w-full px-3 flex justify-center items-center flex-col py-3"
                >
                  <p class="py-8 px-0 text-center">
                    What language is your translation?
                  </p>
                  <u-select
                    v-model="wordTranslation.lang"
                    variant="outline"
                    placeholder="Choose language"
                    :options="languages"
                    size="3xl"
                    class="my-4 w-full px-0 mb-64"
                    select-class="rounded-2xl h-16 text-gray-500 bg-secondary-bg px-3"
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
                  <NextButton
                    :text="$t('button.continue')"
                    class="mt-5"
                    @click="next"
                  />
                </div>
              </Slide>
              <Slide :key="2">
                <div
                  class="w-full px-3 flex justify-center items-center flex-col py-3"
                >
                  <p class="py-8 px-0 text-center">Please translate the word</p>
                  <UTextarea
                    v-model="wordTranslation.translations[0].word"
                    variant="outline"
                    size="3xl"
                    class="my-8 w-full"
                    textarea-class="rounded-2xl h-64 text-gray-500 bg-secondary-bg px-3"
                  />
                  <NextButton
                    :text="$t('button.continue')"
                    class="mt-5"
                    @click="next"
                  />
                </div>
              </Slide>
              <Slide :key="3">
                <div
                  class="w-full px-3 flex justify-center items-center flex-col py-3"
                >
                  <p class="py-8 px-0 text-center">
                    Can you describe the word for me?
                  </p>
                  <UTextarea
                    v-model="wordTranslation.etymology_text"
                    variant="outline"
                    size="3xl"
                    class="my-8 w-full"
                    textarea-class="rounded-2xl h-64 text-gray-500 bg-secondary-bg px-3"
                  />
                  <NextButton
                    :text="$t('button.continue')"
                    class="mt-5"
                    @click="next"
                  />
                </div>
              </Slide>
              <Slide :key="4">
                <div
                  class="w-full px-3 flex justify-center items-center flex-col py-3"
                >
                  <p class="py-8 px-0 text-center">What type of word is it?</p>
                  <URadio
                    v-for="lang of languages"
                    :key="lang.value"
                    v-model="wordTranslation.translations[0].code"
                    v-bind="lang"
                    :ui="{
                      strategy: 'override',
                      default: {
                        color: 'black',
                      },
                      container: 'flex items-center h-16',
                      wrapper:
                        'relative mx-[20px] w-full flex items-start px-[25px] my-[10px] border border-gray-400 rounded-[22px] radio-button',
                      inner: 'ms-3 flex flex-col w-full h-6',
                    }"
                  />
                  <NextButton
                    :text="$t('button.continue')"
                    class="mt-5"
                    @click="next"
                  />
                </div>
              </Slide>
              <Slide :key="5">
                <div
                  class="w-full px-3 flex justify-center items-center flex-col py-3"
                >
                  <p class="py-8 px-0 text-center">
                    Can you tell me the syntax?
                  </p>
                  <URadio
                    v-for="type of types"
                    :key="type.value"
                    v-model="wordType"
                    v-bind="type"
                    :ui="{
                      strategy: 'override',
                      default: {
                        color: 'black',
                      },
                      container: 'flex items-center h-16 mb-10',
                      wrapper:
                        'relative mx-[20px] w-full flex items-start px-[25px]  my-[10px] border border-gray-400 rounded-[22px] radio-button',
                      inner: 'ms-3 flex flex-col w-full h-6',
                    }"
                  />
                  <NextButton
                    :text="$t('button.continue')"
                    class="mt-5"
                    @click="addLocalTranslation()"
                  />
                </div>
              </Slide>
            </Carousel>

            <a
              v-if="currentSlide > 0"
              class="text-black text-center text-sm mt-2 underline cursor-pointer"
              @click="prev"
              >back</a
            >
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>
>
<style scoped lang="scss">
.carousel__pagination {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
button.active::after {
  background-color: #99ffcc !important;
}
</style>
