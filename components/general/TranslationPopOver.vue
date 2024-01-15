<script setup lang="ts">
import { useDrag, useDrop } from "vue3-dnd";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { computed, type PropType, ref, unref, watch } from "vue";
import { TranslationPopOverType } from "~/global/enums/translationPopOverType";
import { useLocalStorageService } from "~/localStorage";
import { useTranslationStore } from "~/store/translation";
import type { WordData } from "~/interfaces/wordTranslation";
import { useGeneralStore } from "~/store/general";

const translationStore = useTranslationStore();
const localStorageService = useLocalStorageService();
const toast = useToast();
const showOverlayDiv = ref(false);
const showCheckboxDiv = ref(false);

const generalStore = useGeneralStore();
const isHoverOnTrash = ref(false);
const isHoverOnHistory = ref(false);
const selectedWord = computed({
  get: () => {
    return translationStore.getSelectedWord;
  },
  set: (value) => {
    translationStore.setSelectedWord(value);
  },
});

watch(selectedWord, (value) => {
  expanded.value = value === word;
});

function removeWordFromText(word: string) {
  translationStore.removeWordFromText(word);
}

function handleHover(type: "trash" | "history", value: boolean) {
  if (type === "trash") {
    isHoverOnTrash.value = value;
  } else {
    isHoverOnHistory.value = value;
  }
}

const props = defineProps({
  type: {
    type: String as PropType<TranslationPopOverType>,
    required: false,
    default: TranslationPopOverType.PRO_TIPS,
  },
  data: {
    type: Object as PropType<WordData>,
    required: true,
  },
});
const { data, type } = props;
const { word, translation, meaning, picture, categories, sound } = data;
const expanded = ref(false);
const audio = ref(null);
const viewport = useViewport();

const translationLogo = computed(() => {
  if (type === TranslationPopOverType.FOUND) return "verified";
  else if (type === TranslationPopOverType.NOT_FOUND) return "unknown";
  else if (type === TranslationPopOverType.NOT_VERIFIED) return "unverified";
  else return null;
});

const wordAudio = computed(() => {
  let wordAudio = null;
  if (sound !== null && sound !== undefined)
    sound.forEach((track) => {
      if (track.mp3_url !== null) {
        wordAudio = track.mp3_url;
      }
    });
  return wordAudio;
});

const wordPronounce = computed(() => {
  let wordAudio = null;
  if (sound !== null && sound !== undefined && sound.length >= 1) {
    const index = sound.findIndex((e) => e.ipa !== null);
    if (index !== -1) {
      wordAudio = sound[index].ipa;
    }
  }
  return wordAudio;
});

const toggleHighlightedText = (divID: string, state: boolean) => {
  const contenteditableDiv = document.getElementById("individual-" + divID);
  if (contenteditableDiv !== null) {
    state
      ? contenteditableDiv.classList.add(
          type === TranslationPopOverType.FOUND ? "bg-success-bg" : "bg-error",
        )
      : contenteditableDiv.classList.remove(
          type === TranslationPopOverType.FOUND ? "bg-success-bg" : "bg-error",
        );
  }
};

watch(expanded, (value) => {
  if (value) {
    toggleHighlightedText(word, true);
    selectedWord.value = word;
  } else {
    toggleHighlightedText(word, false);
    if (selectedWord.value === word) {
      selectedWord.value = "";
    }
  }
});
const playAudio = () => {
  if (audio?.value != null) {
    audio.value.play();
  }
};

const trashSound = "/sounds/loud/bubble-trash.mp3";
const glassSound = "/sounds/loud/bubble-spawn.mp3";
const paginationSound = "/sounds/loud/button-click-wood.mp3";
const categorySound = "/sounds/loud/success-glassy-mallet.mp3";
const handleSound = () => {
  expanded.value = !expanded.value;
  if (generalStore.getSoundEnabled) {
    let audio = null;
    if (expanded.value) {
      audio = new Audio("/sounds/loud/bubble-close-2.mp3");
    } else {
      audio = new Audio("/sounds/loud/bubble-open-2.mp3");
    }
    audio.play();
  }
};

const handleSounds = (soundValue: string) => {
  if (generalStore.getSoundEnabled) {
    const audio = new Audio(soundValue);
    audio.play();
  }
};

// drag and drop
const [dropCollect, drop] = useDrop(() => ({
  accept: "Box",
  drop: () => ({ name: "Dustbin" }),
  collect: (monitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}));
const canDrop = computed(() => unref(dropCollect).canDrop);
const isOver = computed(() => unref(dropCollect).isOver);
const isActive = computed(() => unref(canDrop) && unref(isOver));
const backgroundColor = computed(() =>
  unref(isActive) ? "darkgreen" : unref(canDrop) ? "darkkhaki" : "#222",
);

const [collect, drag] = useDrag(() => ({
  type: "Box",
  item: () => ({
    name: "Box",
  }),
  end: (item, monitor) => {
    const dropResult = monitor.getDropResult<{ name: string }>();
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (item && dropResult) {
      alert(`You dropped ${item.name} into ${dropResult.name}!`);
    }
  },
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
    handlerId: monitor.getHandlerId(),
  }),
}));
const isDragging = computed(() => collect.value.isDragging);

const opacity = computed(() => (unref(isDragging) ? 0.1 : 1));
</script>

<template>
  <div class="group flex items-center justify-center py-3 box">
    <div
      :ref="drag"
      role="Box"
      :style="{ opacity }"
      class="bg-transparent rounded-3xl group-hover:-translate-x-2"
    >
      <u-card
        class="relative overflow-hidden flex-initial md:w-60 lg:w-64 w-64 p-0 rounded-3xl history-card col-span-1 my-[1rem] transition ease-in-out group-hover:-translate-x-2 font-light cursor-pointer border-gray-600"
        :ui="{
          strategy: 'override',
          shadow: 'shadow-card',
          ring: 'ring-0',
          body: {
            padding: 'px-4 py-2',
          },
        }"
        :class="[
          type === TranslationPopOverType.PRO_TIPS
            ? 'group-hover:border-[1px]'
            : '',
        ]"
        @mouseover="showOverlayDiv = true"
        @mouseout="showOverlayDiv = false"
      >
        <div
          v-show="showOverlayDiv"
          class="overlay absolute w-[100%] h-[100%] inset-0 bg-white text-black flex items-center justify-center flex-col"
        >
          <span
            class="uppercase px-5 py-2 mb-5 text-black font-medium text-[14px] delay-300"
            :class="[showCheckboxDiv ? 'delay-300' : '']"
            @mouseover="showCheckboxDiv = true"
            @mouseout="showCheckboxDiv = false"
          >
            protip
          </span>
          <div v-show="showCheckboxDiv">
            <u-checkbox
              :checked="true"
              variant="outline"
              size="sm"
              :ui="{
                strategy: 'overide',
              }"
              checkbox-class=" my-5 w-full h-16 rounded-medium bg-secondary-bg px-3"
            >
              <template #label>
                <span class="text-[14px] text-gray-500 font-light"
                  >Don't show <br />
                  this again</span
                >
              </template>
            </u-checkbox>
          </div>
        </div>
        <div v-if="type === TranslationPopOverType.PRO_TIPS">
          <div class="relative items-center justify-between">
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="absolute right-0 top-0"
            />
          </div>

          <div class="flex items-center justify-center p-4 font-normal">
            {{ word }}
          </div>
        </div>
        <div v-else class="w-full">
          <div class="flex h-full" @click="handleSound">
            <div class="flex-none flex items-center justify-center px-2">
              <UAvatar
                :src="`/icons/${translationLogo}.svg`"
                class="rounded-none"
                :ui="{
                  strategy: 'override',
                  rounded: 'rounded-none',
                }"
                size="xs"
              />
            </div>
            <div class="py-4 flex flex-col justify-center">
              <div class="leading-[18px] text-normal">{{ word }}</div>
              <div class="leading-[18px] text-secondary text-normal">
                {{ translation ? translation : "unknown" }}
              </div>
            </div>
          </div>
          <div v-if="expanded" class="expanded-section">
            <div
              v-if="type == TranslationPopOverType.FOUND"
              class="flex justify-between"
            >
              <div class="text-normal">
                <span v-if="wordPronounce">
                  {{ wordPronounce }}
                </span>
              </div>
              <div>
                <UAvatar
                  v-show="wordAudio"
                  :src="`/icons/Speaker-solid2.svg`"
                  class="rounded-none"
                  :ui="{
                    strategy: 'override',
                    rounded: 'rounded-none',
                  }"
                  size="xs"
                  @click="playAudio"
                />
                <audio v-if="wordAudio" ref="audio" :src="wordAudio" />
              </div>
            </div>
            <UDivider
              v-if="type == TranslationPopOverType.FOUND"
              class="mt-0"
              :ui="{
                strategy: 'override',
                border: { base: 'flex border-gray-200 ' },
              }"
            />
            <div v-if="type == TranslationPopOverType.FOUND">
              <Carousel>
                <Slide v-if="picture" :key="word + '1'">
                  <div class="carousel__item text-left w-full h-full">
                    <img src="/icons/baby-goat.svg" alt="image ref" />
                  </div>
                </Slide>
                <Slide :key="word + '2'">
                  <div class="carousel__item text-left">
                    <div v-if="meaning">
                      <div class="text-secondary my-1 text-normal">meaning</div>
                      <div class="my-2">
                        {{ meaning }}
                      </div>
                    </div>
                    <div>
                      <div class="text-secondary my-3">category</div>
                      <div class="flex flex-wrap py-2">
                        <span
                          v-for="(category, index) in categories"
                          :key="index"
                          class="px-2 py-1 mr-1 my-1 rounded-full bg-primary-bg text-normal"
                          @click="handleSounds(categorySound)"
                          >{{ category }}</span
                        >
                      </div>
                    </div>
                    <div>
                      <div class="text-secondary my-3">type</div>
                      <span
                        class="px-2 py-1 mr-1 my-4 rounded-full bg-primary-bg text-normal"
                        >types will come here</span
                      >
                    </div>
                  </div>
                </Slide>
                <Slide :key="word + '3'">
                  <div class="carousel__item text-left w-full h-full">
                    <div>
                      <div>
                        <UAvatar
                          :src="`/icons/speech_bubble.svg`"
                          class="rounded-none mt-2"
                          :ui="{
                            strategy: 'override',
                            rounded: 'rounded-none',
                          }"
                          size="xs"
                        />
                      </div>
                      <div class="text-normal">usage will come here</div>
                    </div>
                  </div>
                </Slide>
                <template #addons>
                  <Pagination @click="handleSounds(paginationSound)" />
                </template>
              </Carousel>
            </div>
            <div v-if="type == TranslationPopOverType.NOT_FOUND">
              <Carousel>
                <Slide :key="word + '1'" class="flex flex-col">
                  <div class="flex justify-between text-left pb-3 w-full">
                    <div class="text-secondary text-normal">did you mean</div>
                  </div>
                  <UDivider
                    class="mt-0"
                    :ui="{
                      strategy: 'override',
                      border: { base: 'flex border-gray-200 ' },
                    }"
                  />
                  <div class="w-full">
                    <div class="text-secondary text-normal text-left py-3">
                      noun
                    </div>
                    <div class="w-full text-left">
                      <div class="flex w-full justify-between">
                        <span
                          class="px-2 py-1 mr-1 my-4 rounded-full bg-success text-sm"
                          @click="handleSounds(paginationSound)"
                          >alla</span
                        >
                        <div class="flex items-center justify-center">
                          <UAvatar
                            :src="`/icons/magnifying_glass.svg`"
                            class="rounded-none mt-2"
                            :ui="{
                              strategy: 'override',
                              rounded: 'rounded-none',
                            }"
                            size="xs"
                            @click="handleSounds(glassSound)"
                          />
                        </div>
                      </div>

                      <div>
                        <span class="my-4">to,with</span>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide :key="word + '2'" class="flex flex-col">
                  <div class="flex justify-between text-left pb-3 w-full">
                    <div class="text-secondary text-normal">
                      suggest a translation
                    </div>
                  </div>
                  <UDivider
                    class="mt-0"
                    :ui="{
                      strategy: 'override',
                      border: { base: 'flex border-gray-200 ' },
                    }"
                  />
                  <div class="w-full">
                    <div
                      class="w-full text-left flex flex-col items-center justify-center"
                    >
                      <div class="flex w-full justify-between">
                        <span class="text-base font-normal"
                          >May be you know how to translate this word. Provide
                          us a translation and we will try adding it to our
                          dictionary.</span
                        >
                      </div>

                      <div class="flex justify-between w-3/5">
                        <span
                          class="px-2 py-1 mr-1 my-4 rounded-full bg-success text-sm"
                          >add</span
                        >
                        <span
                          class="px-2 py-1 mr-1 my-4 rounded-full bg-success text-sm"
                          >skip</span
                        >
                      </div>
                    </div>
                  </div>
                </Slide>
                <template #addons>
                  <Pagination @click="handleSounds(paginationSound)" />
                </template>
              </Carousel>
            </div>
          </div>
        </div>
      </u-card>
    </div>
    <UTooltip
      v-if="type !== TranslationPopOverType.PRO_TIPS"
      :text="$t('tooltip.trash')"
      :popper="{ placement: 'bottom', strategy: 'absolute' }"
      :ui="{
        strategy: 'override',
        rounded: 'rounded-3xl',
        color: 'text-[#999999] dark:text-white',
        shadow: 'shadow-card',
        ring: 'ring-0',
      }"
      :class="`hidden py-0 bg-primary-bg rounded-3xl border-0 flex-initial w-15 px-1 cursor-pointer ${
        expanded ? 'block' : ''
      } group-hover:block`"
      @mouseover="handleHover('trash', true)"
      @mouseout="handleHover('trash', false)"
      @click="removeWordFromText(word)"
    >
      <UAvatar
        :src="isHoverOnTrash ? '/icons/trash-hover.svg' : '/icons/trash.svg'"
        class="rounded-none"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-none',
        }"
        :size="viewport.isLessThan('tablet') ? '2xs' : '2xs'"
        @click="handleSounds(trashSound)"
      />
    </UTooltip>
  </div>
</template>

<style scoped lang="scss"></style>
