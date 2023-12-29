<script setup lang="ts">
import { computed } from "vue";
import { useGeneralStore } from "~/store/general";
const generalStore = useGeneralStore();

const viewport = useViewport();
const links = ref([
  "translate",
  "history",
  "sign-up",
  "contact us",
  "user agreement",
  "privacy policy",
]);

const slideOverOpen = computed({
  get: () => generalStore.getSideOverState,
  set: (value) => {
    generalStore.setSideOverState(value);
  },
});
function scrollToSection(sectionId: string) {
  if (sectionId === "section-5") {
    slideOverOpen.value = !slideOverOpen.value;
  } else {
    const element = document.getElementById(sectionId);
    if (element != null) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
const getSectionIdAndScrollToTHatSection = (text: string) => {
  if (text === "translate") {
    scrollToSection("section-1");
  } else if (text === "history") {
    scrollToSection("section-2");
  } else if (text === "sign-up") {
    scrollToSection("section-3");
  } else if (text === "contact us") {
    scrollToSection("section-4");
  }
};
</script>
<template>
  <div
    class="container mt-5 lg:w-4/6 xl:w-3/6 lg:pt-[6rem] text-center flex flex-col items-center justify-center"
  >
    <div class="w-full lg:mb-12">
      <UAvatar
        src="/icons/facebook.svg"
        class="rounded-none mx-3"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-none',
        }"
        :size="viewport.isLessThan('tablet') ? 'lg' : '2xl'"
      />
    </div>
    <p class="text-center text-[12px] font-light w-4/6 mb-1 lg:mb-5 mx-auto">
      Titus® and Gemini® duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <p class="w-full lg:w-[90%] text-[12px] mx-auto mb-5 font-light">
      menulance © 2024
    </p>
    <UDivider
      class="mt-4"
      :ui="{
        strategy: 'override',
        border: { base: 'flex border-gray-600 dark:border-gray-800 mb-10' },
      }"
    />
    <p
      v-for="(link, index) in links"
      :key="index"
      class="w-full text-[12px] flex-col flex justify-center items-center py-0.5 underline font-light cursor-pointer"
      @click="getSectionIdAndScrollToTHatSection(link)"
    >
      {{ link }}
    </p>
  </div>
</template>
