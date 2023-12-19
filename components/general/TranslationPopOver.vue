<script setup lang="ts">
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import type { PropType } from "vue";
import { computed } from "vue";
import { TranslationPopOverType } from "~/global/enums/translationPopOverType";

const props = defineProps({
  type: {
    type: String as PropType<TranslationPopOverType>,
    required: false,
    default: TranslationPopOverType.BASIC,
  },
  text: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
    required: true,
  },
});
const { text, type } = props;
const expanded = ref(false);
const viewport = useViewport();

const translationLogo = computed(() => {
  if (type === TranslationPopOverType.FOUND) return "verified";
  else if (type === TranslationPopOverType.NOT_FOUND) return "unknown";
  else if (type === TranslationPopOverType.NOT_VERIFIED) return "unverified";
  else return null;
});
</script>

<template>
  <div class="group flex items-center justify-center">
    <u-card
      class="flex-initial w-64 p-0 rounded-3xl history-card col-span-1 my-[1rem] transition ease-in-out delay-50 duration-600 group-hover:-translate-x-2 font-light cursor-pointer"
      :ui="{
        strategy: 'override',
        shadow: 'shadow-none',
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
          {{ text }}
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
            <div class="leading-[18px]">{{ text }}</div>
            <div class="leading-[18px] text-secondary">{{ translation }}</div>
          </div>
        </div>
        <div v-if="expanded" class="expanded-section">
          <div
            v-if="type == TranslationPopOverType.FOUND"
            class="flex justify-between"
          >
            <div>ca·prét·to</div>
            <div>
              <UAvatar
                :src="`/icons/Speaker-solid2.svg`"
                class="rounded-none"
                :ui="{
                  strategy: 'override',
                  rounded: 'rounded-none',
                }"
                size="xs"
              />
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
              <Slide :key="text + '1'">
                <div class="carousel__item text-left w-full h-full">
                  <img src="/icons/baby-goat.svg" alt="image ref" />
                </div>
              </Slide>
              <Slide :key="text + '2'">
                <div class="carousel__item text-left">
                  <div>
                    <div class="text-secondary my-1">meaning</div>
                    <div class="my-2">
                      Comes from young goats,usually around 6 to 8 weeks old,
                      and is knwon for tender and mid flavour
                    </div>
                  </div>
                  <div>
                    <div class="text-secondary my-3">category</div>
                    <span
                      class="px-2 py-1 mr-1 my-4 rounded-full bg-primary-bg text-sm"
                      >breakfast</span
                    >
                    <span
                      class="px-2 py-1 mr-1 my-4 rounded-full bg-primary-bg text-sm"
                      >breakfast</span
                    >
                  </div>
                  <div>
                    <div class="text-secondary my-3">type</div>
                    <span
                      class="px-2 py-1 mr-1 my-4 rounded-full bg-primary-bg text-sm"
                      >breakfast</span
                    >
                  </div>
                </div>
              </Slide>
              <Slide :key="text + '3'">
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
                    <div class="text-normal">
                      You can do your victory dance or slaughter a goat, or
                      whatever it is you do when you’re happy.
                    </div>
                  </div>
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
                    <div class="text-normal">
                      You can do your victory dance or slaughter a goat, or
                      whatever it is you do when you’re happy.
                    </div>
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
              <Slide :key="text + '1'" class="flex flex-col">
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
              <Slide :key="text + '2'" class="flex flex-col">
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
    <UButton
      v-if="type !== TranslationPopOverType.BASIC"
      size="sm"
      square
      variant="soft"
      block
      :class="`hidden py-0 bg-primary-bg rounded-3xl border-0 flex-initial w-15 px-1 ${
        expanded ? 'block' : ''
      } group-hover:block`"
    >
      <template #leading>
        <UAvatar
          src="/icons/trash.svg"
          class="rounded-none"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
          }"
          :size="viewport.isLessThan('tablet') ? '2xs' : '2xs'"
        />
      </template>
    </UButton>
    <UButton
      v-if="type !== TranslationPopOverType.BASIC"
      size="sm"
      square
      variant="soft"
      block
      :class="`hidden py-0 bg-primary-bg rounded-3xl border-0 flex-initial w-15 px-1 ${
        expanded ? 'block' : ''
      } group-hover:block`"
    >
      <template #leading>
        <UAvatar
          src="/icons/history.svg"
          class="rounded-none"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
          }"
          :size="viewport.isLessThan('tablet') ? '2xs' : '2xs'"
        />
      </template>
    </UButton>
  </div>
</template>

<style scoped lang="scss"></style>
