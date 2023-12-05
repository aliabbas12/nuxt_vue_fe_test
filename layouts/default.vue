<script setup>
import { ref } from "vue";
const menu = ref([
  {
    icon: "/icons/button-vertical-nav.svg",
    hoverIcon: "/icons/button-vertical-navigation-hover.svg",
    hover: false,
    section: "section-1",
  },
  {
    icon: "/icons/button-vertical-nav.svg",
    hoverIcon: "/icons/button-vertical-navigation-hover.svg",
    hover: false,
    section: "section-2",
  },
  {
    icon: "/icons/button-vertical-nav.svg",
    hoverIcon: "/icons/button-vertical-navigation-hover.svg",
    hover: false,
    section: "section-3",
  },
  {
    icon: "/icons/button-vertical-nav.svg",
    hoverIcon: "/icons/button-vertical-navigation-hover.svg",
    hover: false,
    section: "section-4",
  },
  {
    icon: "/icons/account-locked.svg",
    hoverIcon: "/icons/account-locked.svg",
    hover: false,
    section: "section-5",
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
  <div class="default-layout bg-transparent light-mode">
    <header class="w-full fixed top-0 bg-transparent flex justify-between">
      <!-- Your header content goes here -->
      <div>
        <img
          src="/icons/logo.svg"
          alt="Icon"
          class="logo-icon"
          style="height: 35px"
        />
      </div>
      <div
        class="flex px-2 py-1 group transition hover:bg-secondary-bg m-3 rounded-full"
      >
        <UAvatar
          src="/icons/globe.svg"
          class="rounded-none transition"
          :ui="{
            strategy: 'override',
          }"
          size="xs"
        />
        <div class="px-2 transition hover:bg-primary-bg rounded-3xl">EN</div>
        <div
          class="px-2 hidden group-hover:block transition-all duration-300 ease-in-out hover:bg-primary-bg rounded-3xl"
        >
          ES
        </div>
        <div
          class="px-2 hidden group-hover:block transition-all duration-300 ease-in-out hover:bg-primary-bg rounded-3xl"
        >
          IT
        </div>
      </div>
    </header>

    <main>
      <div
        class="flex flex-col py-[14px] fixed top-1/2 transform -translate-y-1/2 left-0 bg-secondary-bg rounded-r-[15px] py-1 shadow-xl navigations"
      >
        <UButton
          v-for="(item, index) in menu"
          :key="index"
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
      </div>
      <slot />
    </main>

    <footer class="sticky bottom-0">
      <!-- Your footer content goes here -->
      <p>&copy; 2023 menulance</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  header {
    .logo-icon {
      height: 35px;
      padding: 6px;
    }
  }
}
.navigations {
  .button:hover {
    .icon {
      transform: scale(1.8);
    }
  }
}
</style>
