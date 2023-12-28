<script setup lang="ts">
import { onUnmounted, computed } from "vue";
import { useTranslationStore } from "~/store/translation";
import { useGeneralStore } from "~/store/general";
const viewport = useViewport();
const store = useTranslationStore();
const generalStore = useGeneralStore();
const text = computed(() => store.text);
const synth = window.speechSynthesis;

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
  <div class="container flex flex-wrap md:px-3 lg:px-5 w-3/4">
    <div class="w-1/4 text-center">
      <UTooltip
        text="virtual keyboard"
        :popper="{ placement: 'bottom-end' }"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-3xl',
          shadow: 'shadow-none',
          ring: 'ring-0',
        }"
        @click="isKeyboardOpen = !isKeyboardOpen"
      >
        <UAvatar
          src="/icons/keyboard.svg"
          class="rounded-none"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
          }"
          :size="viewport.isLessThan('tablet') ? 'sm' : 'md'"
        />
      </UTooltip>
    </div>
    <div class="w-1/4 text-center">
      <UTooltip
        text="voice input"
        :popper="{ placement: 'bottom-end' }"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-3xl',
          shadow: 'shadow-none',
          ring: 'ring-0',
        }"
        :class="`${isListening ? 'icon-listening' : ''}`"
        @click="isListening = !isListening"
      >
        <UAvatar
          :src="
            isListening ? '/icons/microphone-red.svg' : '/icons/microphone.svg'
          "
          class="rounded-none icon"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
          }"
          :size="viewport.isLessThan('tablet') ? 'sm' : 'md'"
        />
      </UTooltip>
    </div>
    <div class="w-1/4 text-center">
      <UTooltip
        text="play audio"
        :popper="{ placement: 'bottom-end' }"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-3xl',
          shadow: 'shadow-none',
          ring: 'ring-0',
        }"
        @click="speak"
      >
        <UAvatar
          src="/icons/Speaker-solid2.svg"
          class="rounded-none"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
          }"
          :size="viewport.isLessThan('tablet') ? 'sm' : 'md'"
        />
      </UTooltip>
    </div>
    <div class="w-1/4 text-center">
      <UTooltip
        text="restart"
        :popper="{ placement: 'bottom-end' }"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-3xl',
          shadow: 'shadow-none',
          ring: 'ring-0',
        }"
        @click="clearText"
      >
        <UAvatar
          src="/icons/button-restart.svg"
          class="rounded-none"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
          }"
          :size="viewport.isLessThan('tablet') ? 'sm' : 'md'"
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
