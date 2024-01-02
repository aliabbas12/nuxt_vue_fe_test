<script setup>
import LanguagePane from "~/components/layouts/LanguagePane.vue";
import SectionNavigation from "~/components/layouts/SectionNavigation.vue";
import ListeningAudio from "~/components/general/ListeningAudio.vue";
import LeftSideOver from "~/components/layouts/LeftSideOver.vue";
</script>
<template>
  <div class="default-layout bg-transparent light-mode font-sans">
    <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </head>
    <header class="w-full fixed top-0 bg-transparent flex justify-between z-50">
      <!-- Your header content goes here -->
      <div>
        <img
          src="/menulance-logo-beta.svg"
          alt="Icon"
          class="logo-icon w-[121px] md:w-[151px] lg:w-[211px] md:h-[35px] lg:h-[41px]"
        />
      </div>
      <LanguagePane />
    </header>

    <main>
      <LeftSideOver />
      <SectionNavigation />
      <slot />
    </main>
    <ListeningAudio />
    <UNotifications />
    <footer class="sticky bottom-0">
      <!-- Your footer content goes here -->
      <p>&copy; 2024 menulance</p>
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
