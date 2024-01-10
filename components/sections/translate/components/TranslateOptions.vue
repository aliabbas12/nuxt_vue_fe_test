<script setup lang="ts">
import { onUnmounted, computed } from "vue";
import { useTranslationStore } from "~/store/translation";
import { useGeneralStore } from "~/store/general";
const viewport = useViewport();
const store = useTranslationStore();
const generalStore = useGeneralStore();
const text = computed(() => store.text);
const synth = window.speechSynthesis;
const isHover = ref(false);
const speak = () => {
  const utterance = new SpeechSynthesisUtterance(text.value);
  synth.speak(utterance);
};

const clearText = () => {
  const contenteditableDiv = document.getElementById("inputTextBox");

  if (contenteditableDiv != null) {
    contenteditableDiv.innerHTML = "";
  }
  store.clearText();
};
const isListening = computed({
  get: () => generalStore.getListeningState,
  set: (value) => {
    generalStore.setListeningState(value);
  },
});

onUnmounted(() => {
  synth.cancel();
});

const isKeyboardOpen = computed({
  get: () => generalStore.keyboard,
  set: (value) => {
    generalStore.setKeyboardState(value);
  },
});
</script>

<template>
  <div
    class="container flex flex-wrap md:px-3 lg:px-5 w-4/5 md:w-full lg:w-4/5 xl:w-4/5"
  >
    <div v-if="store.getTranslationButtionState" class="w-1/5 text-center">
      <UTooltip
        :text="$t('tooltip.copy')"
        :popper="{ placement: 'bottom', offsetSkid: 30 }"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-3xl',
          color: 'text-[#999999] dark:text-white',
          shadow: 'shadow-card',
          ring: 'ring-0',
          base: '[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative ml-5',
        }"
      >
        <UAvatar
          src="/icons/copy.svg"
          class="rounded-none cursor-pointer"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
            size: {
              xs: 'h-6 w-6 text-xs',
              sm: 'h-7 w-7 text-normal font-normal',
            },
          }"
          :size="viewport.isLessThan('tablet') ? 'xs' : 'sm'"
        />
      </UTooltip>
    </div>
    <div v-else class="w-1/4 text-center">
      <UTooltip
        :text="$t('tooltip.virtual_keyboard')"
        :popper="{ placement: 'bottom', offsetSkid: 30 }"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-3xl',
          color: 'text-[#999999] dark:text-white',
          shadow: 'shadow-card',
          ring: 'ring-0',
          base: '[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative ml-5',
        }"
        @click="isKeyboardOpen = !isKeyboardOpen"
      >
        <UAvatar
          src="/icons/keyboard.svg"
          class="rounded-none cursor-pointer"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
            size: {
              xs: 'h-6 w-6 text-xs',
              sm: 'h-7 w-7 text-normal font-normal',
            },
          }"
          :size="viewport.isLessThan('tablet') ? 'xs' : 'sm'"
        />
      </UTooltip>
    </div>
    <div v-if="store.getTranslationButtionState" class="w-1/5 text-center">
      <UTooltip
        :text="$t('tooltip.voice_input')"
        :popper="{ placement: 'bottom', offsetSkid: 30 }"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-3xl',
          color: 'text-[#999999] dark:text-white',
          shadow: 'shadow-card',
          ring: 'ring-0',
          base: '[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative ml-5',
        }"
      >
        <UAvatar
          src="/icons/keyboard.svg"
          class="rounded-none cursor-pointer"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
            size: {
              xs: 'h-6 w-6 text-xs',
              sm: 'h-7 w-7 text-normal font-normal',
            },
          }"
          :size="viewport.isLessThan('tablet') ? 'xs' : 'sm'"
        />
      </UTooltip>
    </div>
    <div v-else class="w-1/4 text-center">
      <UTooltip
        :text="$t('tooltip.voice_input')"
        :popper="{ placement: 'bottom', offsetSkid: 30 }"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-3xl',
          color: 'text-[#999999] dark:text-white',
          shadow: 'shadow-card',
          ring: 'ring-0',
        }"
        :class="`${isListening ? 'icon-listening' : ''}`"
        @click="isListening = !isListening"
      >
        <UAvatar
          :src="
            isListening ? '/icons/microphone-red.svg' : '/icons/microphone.svg'
          "
          class="rounded-none icon cursor-pointer"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
            size: {
              xs: 'h-6 w-6 text-xs',
              sm: 'h-7 w-7 text-normal font-normal',
            },
          }"
          :size="viewport.isLessThan('tablet') ? 'xs' : 'sm'"
        />
      </UTooltip>
    </div>
    <div class="w-1/4 text-center">
      <UTooltip
        :text="$t('tooltip.play_audio')"
        :popper="{ placement: 'bottom', offsetSkid: 30 }"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-3xl',
          color: 'text-[#999999] dark:text-white',
          shadow: 'shadow-card',
          ring: 'ring-0',
        }"
        @click="speak"
      >
        <UAvatar
          src="/icons/Speaker-solid2.svg"
          class="rounded-none cursor-pointer"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
            size: {
              xs: 'h-6 w-6 text-xs',
              sm: 'h-7 w-7 text-normal font-normal',
            },
          }"
          :size="viewport.isLessThan('tablet') ? 'xs' : 'sm'"
        />
      </UTooltip>
    </div>
    <div class="w-1/4 text-center">
      <UTooltip
        :text="$t('tooltip.restart')"
        :popper="{ placement: 'bottom', offsetSkid: 30 }"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-3xl',
          color: 'text-[#999999] dark:text-white',
          shadow: 'shadow-card',
          ring: 'ring-0',
        }"
        @click="clearText"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
      >
        <UAvatar
          src="/icons/button-restart.svg"
          class="rounded-none cursor-pointer"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
            size: {
              xs: 'h-6 w-6 text-xs',
              sm: 'h-7 w-7 text-normal font-normal',
            },
          }"
          :size="viewport.isLessThan('tablet') ? 'xs' : 'sm'"
        />
      </UTooltip>
    </div>
  </div>
  <UDivider
    class="mt-4"
    :ui="{
      strategy: 'override',
      border: { base: 'flex border-gray-600 dark:border-gray-800' },
    }"
  />
</template>

<style scoped lang="scss">
.icon-listening {
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }

  .icon {
    animation: pulse 1.5s infinite;
  }
}
</style>
