<script setup>
import LanguagePane from "~/components/layouts/LanguagePane.vue";
import SectionNavigation from "~/components/layouts/SectionNavigation.vue";
import ListeningAudio from "~/components/general/ListeningAudio.vue";
</script>
<template>
  <div class="default-layout bg-transparent light-mode">
    <header class="w-full fixed top-0 bg-transparent flex justify-between z-50">
      <!-- Your header content goes here -->
      <div>
        <img
          src="/icons/logo.svg"
          alt="Icon"
          class="logo-icon md:w-[151px] lg:w-[211px] md:h-[35px] lg:h-[41px]"
        />
      </div>
      <LanguagePane />
    </header>

    <main>
      <SectionNavigation />
      <slot />
    </main>
    <ListeningAudio />
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
      padding: 6px;
    }
  }
}
</style>
