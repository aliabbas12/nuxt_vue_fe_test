<script setup lang="ts">
import { ref } from "vue";

const menu = ref([
  {
    icon: "/icons/button-vertical-nav.svg",
    hoverIcon: "/icons/button-vertical-navigation-hover.svg",
    hover: false,
    section: "section-1",
    tooltip: "translate",
  },
  {
    icon: "/icons/button-vertical-nav.svg",
    hoverIcon: "/icons/button-vertical-navigation-hover.svg",
    hover: false,
    section: "section-2",
    tooltip: "history",
  },
  {
    icon: "/icons/button-vertical-nav.svg",
    hoverIcon: "/icons/button-vertical-navigation-hover.svg",
    hover: false,
    section: "section-3",
    tooltip: "sign-in",
  },
  {
    icon: "/icons/button-vertical-nav.svg",
    hoverIcon: "/icons/button-vertical-navigation-hover.svg",
    hover: false,
    section: "section-4",
    tooltip: "contact us",
  },
  {
    icon: "/icons/account-locked.svg",
    hoverIcon: "/icons/account-locked.svg",
    hover: false,
    section: "section-5",
    tooltip: "login or create account",
  },
]);

function changeHoverStatus(index, value) {
  menu.value[index].hover = value;
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <div
    class="flex flex-col py-[14px] fixed top-1/2 transform -translate-y-1/2 left-0 bg-secondary-bg rounded-r-[15px] py-1 shadow-xl navigations"
  >
    <UTooltip
      v-for="(item, index) in menu"
      :key="index"
      :text="item.tooltip"
      :popper="{ placement: 'right' }"
      :ui="{
        strategy: 'override',
        rounded: 'rounded-3xl',
        shadow: 'shadow-none',
      }"
    >
      <UButton
        size="sm"
        color="white"
        square
        variant="soft"
        block
        class="px-4 py-3 bg-secondary-bg rounded-3xl border-0 button"
        @click="scrollToSection(item.section)"
        @mouseover="changeHoverStatus(index, true)"
        @mouseleave="changeHoverStatus(index, false)"
      >
        <template #leading>
          <img
            class="icon"
            :src="menu[index].hover ? item.hoverIcon : item.icon"
            style="height: 13px"
          />
        </template>
      </UButton>
    </UTooltip>
  </div>
</template>

<style scoped lang="scss">
.navigations {
  .button:hover {
    .icon {
      transform: scale(1.8);
    }
  }
}
</style>
