<script setup lang="ts">
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import type { PropType } from "vue";
import { computed, watch } from "vue";
import { TranslationPopOverType } from "~/global/enums/translationPopOverType";
import { useLocalStorageService } from "~/localStorage";
import type { WordData } from "~/interfaces/wordTranslation";
const localStorageService = useLocalStorageService();
const toast = useToast();

function addHistory(history: any) {
  localStorageService.setHistory({ value: history });
  toast.add({ title: "history added", timeout: 1000 });
}

const props = defineProps({
  type: {
    type: String as PropType<TranslationPopOverType>,
    required: false,
    default: TranslationPopOverType.BASIC,
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
  } else {
    toggleHighlightedText(word, false);
  }
});
const playAudio = () => {
  if (audio?.value != null) {
    audio.value.play();
  }
};
</script>

<template>
  <div class="group flex items-center justify-center">
    <u-card
      class="flex-initial w-64 p-0 rounded-3xl history-card col-span-1 my-[1rem] transition ease-in-out delay-50 duration-600 group-hover:-translate-x-2 font-light cursor-pointer"
      :ui="{
        strategy: 'override',
        shadow: 'shadow-card',
        ring: 'ring-0',
        body: {
          padding: 'px-4 py-2',
        },
      }"
    >
      <div v-if="type === TranslationPopOverType.BASIC">
        <div class="relative items-center justify-between">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="absolute right-0 top-0"
          />
        </div>
        <div class="flex items-center justify-center p-4">
          {{ word }}
        </div>
      </div>
      <div v-else class="w-full">
        <div class="flex h-full" @click="expanded = !expanded">
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
            <div class="leading-[18px]">{{ word }}</div>
            <div class="leading-[18px] text-secondary">{{ translation }}</div>
          </div>
        </div>
        <div v-if="expanded" class="expanded-section">
          <div
            v-if="type == TranslationPopOverType.FOUND"
            class="flex justify-between"
          >
            <div>{{ word }}</div>
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
                    <div class="text-secondary my-1">meaning</div>
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
                        class="px-2 py-1 mr-1 my-1 rounded-full bg-primary-bg text-sm"
                        >{{ category }}</span
                      >
                    </div>
                  </div>
                  <div>
                    <div class="text-secondary my-3">type</div>
                    <span
                      class="px-2 py-1 mr-1 my-4 rounded-full bg-primary-bg text-sm"
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
                    <div class="text-normal">senses will come here</div>
                  </div>
                </div>
              </Slide>
              <template #addons>
                <Pagination />
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
                        >May be you know how to translate this word. Provide us
                        a translation and we will try adding it to our
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
                <Pagination />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </u-card>
    <UTooltip
      v-if="type !== TranslationPopOverType.BASIC"
      text="trash"
      :popper="{ placement: 'bottom', strategy: 'absolute' }"
      :ui="{
        strategy: 'override',
        rounded: 'rounded-3xl',
        shadow: 'shadow-none',
        ring: 'ring-0',
      }"
      :class="`hidden py-0 bg-primary-bg rounded-3xl border-0 flex-initial w-15 px-1 ${
        expanded ? 'block' : ''
      } group-hover:block`"
    >
      <UAvatar
        src="/icons/trash.svg"
        class="rounded-none"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-none',
        }"
        :size="viewport.isLessThan('tablet') ? '2xs' : '2xs'"
      />
    </UTooltip>

    <UTooltip
      v-if="type !== TranslationPopOverType.BASIC"
      text="save"
      :popper="{ placement: 'bottom', strategy: 'absolute' }"
      :ui="{
        strategy: 'override',
        rounded: 'rounded-3xl',
        shadow: 'shadow-none',
        ring: 'ring-0',
      }"
      :class="`hidden py-0 bg-primary-bg rounded-3xl border-0 flex-initial w-15 px-1 ${
        expanded ? 'block' : ''
      } group-hover:block`"
      @click="addHistory({ word, translation, type })"
    >
      <UAvatar
        src="/icons/history.svg"
        class="rounded-none"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-none',
        }"
        :size="viewport.isLessThan('tablet') ? '2xs' : '2xs'"
      />
    </UTooltip>
  </div>
</template>

<style scoped lang="scss"></style>
