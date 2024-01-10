<script setup lang="ts">
import { computed } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import { useGeneralStore } from "../../store/general";
const generalStore = useGeneralStore();
const wizard = ref(true);
const proTips = ref(true);
const autoDedect = ref(true);
const notification = ref(true);
const dark = ref(false);

const isOpenFontChangeModel = computed({
  get: () => generalStore.getIsOpenChangeFontModelState,
  set: (value) => {
    generalStore.setIsOpenChangeFontModelState(value);
  },
});

const slideOverOpen = computed({
  get: () => generalStore.getSideOverState,
  set: (value) => {
    generalStore.setSideOverState(value);
  },
});
const updateSoundFx = computed({
  get: () => generalStore.getSoundEnabled,
  set: (value) => {
    generalStore.setSoundEnabled(value);
  },
});
</script>

<template>
  <div>
    <USlideover
      v-model="slideOverOpen"
      side="left"
      :overlay="false"
      :ui="{
        strategy: 'override',
        width: 'max-w-xs rounded-2xl shadow-card',
        shadow: 'shadow-card',
      }"
    >
      <UIcon
        name="mdi:close-circle-outline"
        class="absolute top-0 right-0 m-2 w-[2rem] h-[2rem] cursor-pointer z-50"
        dynamic
        size="3xl"
        @click="slideOverOpen = false"
      />
      <Carousel>
        <Slide :key="'1'" class="flex flex-col">
          <div class="h-full w-full flex flex-col my-20">
            <div
              class="w-full flex flex-col my-16 items-center justify-center cursor-pointer"
            >
              <UAvatar
                src="/icons/profile-setting.svg"
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
              <span class="my-2">setting</span>
            </div>
            <div class="w-full flex flex-col my-16 items-center justify-center">
              <UAvatar
                src="/icons/language.svg"
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
              <span class="my-2">native language</span>
            </div>
            <div class="w-full flex flex-col my-16 items-center justify-center">
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
                @click="isOpenFontChangeModel = true"
              />
              <span class="my-2">font</span>
            </div>
          </div>
        </Slide>
        <Slide :key="'2'" class="flex flex-col">
          <div class="h-full w-full flex flex-col my-10">
            <div class="w-full flex flex-col my-16 items-center justify-center">
              <UToggle
                v-model="wizard"
                color="primary"
                size="xl"
                :ui="{
                  strategy: 'override',
                  active: 'bg-success dark:bg-success',
                  base: 'relative inline-flex flex-shrink-0 border-2 border-black',
                  container: {
                    base: 'pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200 border-solid border-2 border-black ml-[0.15rem]',
                    size: {
                      xl: 'w-5 h-5 mt-0.5',
                    },
                  },
                }"
              />
              <div class="my-3">wizard</div>
            </div>
            <div class="w-full flex flex-col my-16 items-center justify-center">
              <UToggle
                v-model="proTips"
                color="primary"
                size="xl"
                :ui="{
                  strategy: 'override',
                  active: 'bg-success dark:bg-success',
                  base: 'relative inline-flex flex-shrink-0 border-2 border-black',
                  container: {
                    base: 'pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200 border-solid border-2 border-black ml-[0.15rem]',
                    size: {
                      xl: 'w-5 h-5 mt-0.5',
                    },
                  },
                }"
              />
              <div class="my-3">pro tips</div>
            </div>
            <div class="w-full flex flex-col my-16 items-center justify-center">
              <UToggle
                v-model="autoDedect"
                color="primary"
                size="xl"
                :ui="{
                  strategy: 'override',
                  active: 'bg-success dark:bg-success',
                  base: 'relative inline-flex flex-shrink-0 border-2 border-black',
                  container: {
                    base: 'pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200 border-solid border-2 border-black ml-[0.15rem]',
                    size: {
                      xl: 'w-5 h-5 mt-0.5',
                    },
                  },
                }"
              />
              <div class="my-3">autodedect</div>
            </div>
            <div class="w-full flex flex-col my-16 items-center justify-center">
              <UToggle
                v-model="notification"
                color="primary"
                size="xl"
                :ui="{
                  strategy: 'override',
                  active: 'bg-success dark:bg-success',
                  base: 'relative inline-flex flex-shrink-0 border-2 border-black',
                  container: {
                    base: 'pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200 border-solid border-2 border-black ml-[0.15rem]',
                    size: {
                      xl: 'w-5 h-5 mt-0.5',
                    },
                  },
                }"
              />
              <div class="my-3">notifications</div>
            </div>
          </div>
        </Slide>
        <Slide :key="'2'" class="flex flex-col">
          <div class="h-full w-full flex flex-col my-10">
            <div class="w-full flex flex-col my-16 items-center justify-center">
              <UToggle
                v-model="updateSoundFx"
                color="primary"
                size="xl"
                :ui="{
                  strategy: 'override',
                  active: 'bg-success dark:bg-success',
                  base: 'relative inline-flex flex-shrink-0 border-2 border-black',
                  container: {
                    base: 'pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200 border-solid border-2 border-black',
                    size: {
                      xl: 'w-5 h-5 mt-0.5',
                    },
                  },
                }"
                @click="handleChange"
              />
              <div class="my-3">sound fx</div>
            </div>
            <div class="w-full flex flex-col my-16 items-center justify-center">
              <UToggle
                v-model="dark"
                color="primary"
                size="xl"
                :ui="{
                  strategy: 'override',
                  active: 'bg-success dark:bg-success',
                  base: 'relative inline-flex flex-shrink-0 border-2 border-black',
                  container: {
                    base: 'pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200 border-solid border-2 border-black ml-[0.15rem]',
                    size: {
                      xl: 'w-5 h-5 mt-0.5',
                    },
                  },
                }"
              />
              <div class="my-3">dark mode</div>
            </div>
          </div></Slide
        >
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </USlideover>
  </div>
</template>

<style scoped lang="scss"></style>
