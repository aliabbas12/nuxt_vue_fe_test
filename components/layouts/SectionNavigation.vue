<script setup lang="ts">
import { ref, computed } from "vue";
import { useGeneralStore } from "~/store/general";
const generalStore = useGeneralStore();

const currentSection = computed({
  get: () => generalStore.getCurrentSectionState,
  set: (value) => {
    generalStore.setCurrentSectionState(value);
  },
});

const slideOverOpen = computed({
  get: () => generalStore.getSideOverState,
  set: (value) => {
    generalStore.setSideOverState(value);
  },
});

const menu = ref([
  {
    icon: "/icons/button-vertical-nav.svg",
    hoverIcon: "/icons/button-vertical-navigation-hover.svg",
    hover: false,
    section: "translate",
    tooltip: "tooltip.translate",
  },
  {
    icon: "/icons/button-vertical-nav.svg",
    hoverIcon: "/icons/button-vertical-navigation-hover.svg",
    hover: false,
    section: "history",
    tooltip: "tooltip.history",
  },
  {
    icon: "/icons/button-vertical-nav.svg",
    hoverIcon: "/icons/button-vertical-navigation-hover.svg",
    hover: false,
    section: "sign-up",
    tooltip: "tooltip.sign_up",
  },
  {
    icon: "/icons/button-vertical-nav.svg",
    hoverIcon: "/icons/button-vertical-navigation-hover.svg",
    hover: false,
    section: "contact-us",
    tooltip: "tooltip.contact_us",
  },
  {
    icon: "/icons/notification.svg",
    hoverIcon: "/icons/notification-hover.svg",
    hover: false,
    section: "section-5",
    tooltip: "tooltip.notifications",
  },
  {
    icon: "/icons/account-locked.svg",
    hoverIcon: "/icons/account-locked-hover.svg",
    hover: false,
    section: "section-5",
    tooltip: "tooltip.account",
  },
]);

function changeHoverStatus(index: number, value: boolean) {
  menu.value[index].hover = value;
}

function scrollToSection(sectionId: string) {
  if (sectionId === "section-5") {
    slideOverOpen.value = !slideOverOpen.value;
  } else {
    currentSection.value = sectionId;
    const element = document.getElementById(sectionId);
    if (element != null) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
</script>

<template>
  <div
    :class="`flex flex-col py-[18px] fixed top-1/2 transform -translate-y-1/2 left-0 bg-secondary-bg rounded-r-[15px] shadow-card navigations z-100 transition-all duration-200 ease-in-out pl-[3px]  ${
      slideOverOpen ? 'delay-100 ml-[20rem]' : ''
    }`"
  >
    <UTooltip
      v-for="(item, index) in menu"
      :key="index"
      :text="$t(item.tooltip)"
      :popper="{ placement: 'right' }"
      :ui="{
        strategy: 'override',
        rounded: 'rounded-3xl',
        color: 'text-[#999999] dark:text-white',
        shadow: 'shadow-card',
        ring: 'ring-0',
      }"
    >
      <UButton
        size="sm"
        color="white"
        square
        variant="soft"
        block
        class="px-4 py-2 bg-secondary-bg rounded-3xl border-0 button"
        @click="scrollToSection(item.section)"
        @mouseover="changeHoverStatus(index, true)"
        @mouseleave="changeHoverStatus(index, false)"
      >
        <template #leading>
          <img
            :class="`icon ${currentSection === item.section ? ' active' : ''}`"
            :src="
              currentSection === item.section || menu[index].hover
                ? item.hoverIcon
                : item.icon
            "
            :style="`height: ${item.section == 'section-5' ? '15px' : '13px'}`"
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
      &:not(.active) {
        transform: scale(1.5);
      }
    }
  }
  .button {
    .icon {
      &.active {
        transform: scale(1.5);
      }
    }
  }
}
</style>
