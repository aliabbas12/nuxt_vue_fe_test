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
      <UButton
        size="lg"
        color="bg-primary-bg"
        square
        variant="soft"
        block
        class="px-0 py-0 bg-primary-bg rounded-3xl border-0"
        @click="isKeyboardOpen = !isKeyboardOpen"
      >
        <template #leading>
          <UAvatar
            src="/icons/keyboard.svg"
            class="rounded-none"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            :size="viewport.isLessThan('tablet') ? 'sm' : 'md'"
          />
        </template>
      </UButton>
    </div>
    <div class="w-1/4 text-center">
      <UButton
        size="lg"
        color="bg-primary-bg"
        square
        variant="soft"
        block
        :class="`px-0 py-0 bg-primary-bg rounded-3xl border-0 ${
          isListening ? 'icon-listening' : ''
        }`"
        @click="isListening = !isListening"
      >
        <template #leading>
          <UAvatar
            :src="
              isListening
                ? '/icons/microphone-red.svg'
                : '/icons/microphone.svg'
            "
            class="rounded-none icon"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            :size="viewport.isLessThan('tablet') ? 'sm' : 'md'"
          />
        </template>
      </UButton>
    </div>
    <div class="w-1/4 text-center">
      <UButton
        size="lg"
        color="bg-primary-bg"
        square
        variant="soft"
        block
        class="px-0 py-0 bg-primary-bg rounded-3xl border-0"
        @click="speak"
      >
        <template #leading>
          <UAvatar
            src="/icons/Speaker-solid2.svg"
            class="rounded-none"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            :size="viewport.isLessThan('tablet') ? 'sm' : 'md'"
          />
        </template>
      </UButton>
    </div>
    <div class="w-1/4 text-center">
      <UButton
        size="lg"
        color="bg-primary-bg"
        square
        variant="soft"
        block
        class="px-0 py-0 bg-primary-bg rounded-3xl border-0"
        @click="clearText"
      >
        <template #leading>
          <UAvatar
            src="/icons/button-restart.svg"
            class="rounded-none"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            :size="viewport.isLessThan('tablet') ? 'sm' : 'md'"
          />
        </template>
      </UButton>
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
