<script setup lang="ts">
import { onUnmounted, computed } from "vue";
import { useTranslationStore } from "~/store/translation";
import { useGeneralStore } from "~/store/general";
const viewport = useViewport();
const store = useTranslationStore();
const generalStore = useGeneralStore();
const text = computed(() => store.text);
const synth = window.speechSynthesis;
const isListening = computed({
  get: () => generalStore.getListeningState,
  set: (value) => {
    generalStore.setListeningState(value);
  },
});
const isKeyboardOpen = computed({
  get: () => generalStore.keyboard,
  set: (value) => {
    generalStore.setKeyboardState(value);
  },
});
const buttonClickedTooptips = [
  {
    id: 1,
    tooltip: "tooltip.copy",
    isHover: false,
    icon: "/icons/copy.svg",
    hoverIcon: "/icons/copy-hover.svg",
    myFunction: function () {
      const contentEditableDiv = document.getElementById("inputTextBox");
      if (contentEditableDiv != null) {
        navigator.clipboard.writeText(contentEditableDiv.innerText);
      }
    },
  },
  {
    id: 2,
    tooltip: "tooltip.play_audio",
    isHover: false,
    icon: "/icons/speaker-solid2.svg",
    hoverIcon: "/icons/speaker-solid2-hover.svg",
    myFunction: function () {
      const utterance = new SpeechSynthesisUtterance(text.value);
      synth.speak(utterance);
    },
  },
  {
    id: 3,
    tooltip: "tooltip.pin",
    isHover: false,
    icon: "/icons/pin.svg",
    hoverIcon: "/icons/pin-hover.svg",
    myFunction: function () {},
  },
  {
    id: 4,
    tooltip: "tooltip.feedback",
    isHover: false,
    icon: "/icons/feedback.svg",
    hoverIcon: "/icons/feedback-hover.svg",
    myFunction: function () {},
  },
  {
    id: 5,
    tooltip: "tooltip.restart",
    isHover: false,
    icon: "/icons/button-restart.svg",
    hoverIcon: "/icons/button-restart-hover.svg",
    myFunction: function () {
      const contenteditableDiv = document.getElementById("inputTextBox");

      if (contenteditableDiv != null) {
        contenteditableDiv.innerHTML = "";
      }
      store.clearText();
      store.setTranslationButtonState(false);
    },
  },
];
const buttonNotClickedTooptips = [
  {
    id: 1,
    tooltip: "tooltip.virtual_keyboard",
    isHover: false,
    icon: "/icons/keyboard.svg",
    hoverIcon: "/icons/keyboard-hover.svg",
    myFunction: function () {
      isKeyboardOpen.value = !isKeyboardOpen.value;
    },
  },
  {
    id: 2,
    tooltip: "tooltip.voice_input",
    isHover: false,
    icon: "/icons/microphone.svg",
    hoverIcon: "icons/microphone-hover.svg",
    myFunction: function () {
      isListening.value = !isListening.value;
      if (isListening.value) {
        this.icon = "icons/microphone-red.svg";
        this.hoverIcon = "icons/microphone-red.svg";
      } else {
        this.icon = "icons/microphone.svg";
        this.hoverIcon = "icons/microphone-hover.svg";
      }
    },
  },
  {
    id: 3,
    tooltip: "tooltip.play_audio",
    isHover: false,
    icon: "/icons/speaker-solid2.svg",
    hoverIcon: "/icons/speaker-solid2-hover.svg",
    myFunction: function () {
      const utterance = new SpeechSynthesisUtterance(text.value);
      synth.speak(utterance);
    },
  },

  {
    id: 4,
    tooltip: "tooltip.restart",
    isHover: false,
    icon: "/icons/button-restart.svg",
    hoverIcon: "/icons/button-restart-hover.svg",
    myFunction: function () {
      const contenteditableDiv = document.getElementById("inputTextBox");

      if (contenteditableDiv != null) {
        contenteditableDiv.innerHTML = "";
      }
      store.clearText();
      store.setTranslationButtonState(false);
    },
  },
];
onUnmounted(() => {
  synth.cancel();
});
const getTooltipArray = computed(() => {
  if (store.getTranslationButtonState) {
    return buttonClickedTooptips;
  } else {
    return buttonNotClickedTooptips;
  }
});
</script>

<template>
  <div
    class="container flex flex-wrap md:px-3 lg:px-5 w-4/5 md:w-full lg:w-4/5 xl:w-4/5"
  >
    <div
      v-for="tooltip in getTooltipArray"
      :key="tooltip.id"
      :class="[
        store.getTranslationButtonState === true
          ? 'w-1/5 text-center'
          : 'w-1/4 text-center',
      ]"
    >
      <UTooltip
        :text="$t(tooltip.tooltip)"
        :popper="{ placement: 'bottom', offsetSkid: 30 }"
        :class="[
          !store.isTranslationButtonClicked && isListening && tooltip.id === 2
            ? 'icon-listening'
            : '',
        ]"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-3xl',
          color: 'text-[#999999] dark:text-white',
          shadow: 'shadow-card',
          ring: 'ring-0',
          base: '[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative ml-5',
        }"
        @mouseover="tooltip.isHover = true"
        @mouseleave="tooltip.isHover = false"
        @click="tooltip.myFunction()"
      >
        <UAvatar
          :src="[tooltip.isHover ? tooltip.hoverIcon : tooltip.icon]"
          class="rounded-none cursor-pointer"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
            size: {
              xs: 'h-5 w-5 text-xs',
              sm: 'h-7 w-7 text-normal font-normal',
            },
          }"
          :class="[
            !store.isTranslationButtonClicked && isListening && tooltip.id === 2
              ? 'icon'
              : '',
          ]"
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
