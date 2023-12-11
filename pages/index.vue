<template>
  <main class="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">
    <section id="section-1" class="w-full h-screen bg-primary-bg snap-start">
      <TranslateSection />
      <div class=""></div>
      <TranslationPane />
    </section>
    <section
      id="section-2"
      class="w-full h-screen bg-primary-bg snap-start overflow-y-auto"
    >
      <HistorySection />
    </section>
    <section id="section-3" class="w-full h-screen bg-secondary-bg snap-start">
      <CreateAccountSection />
    </section>
    <!--    <section id="section-4" class="w-full h-screen bg-primary-bg snap-start">-->
    <!--      section-->
    <!--    </section>-->
    <!--    <section class="w-full h-screen bg-secondary-bg snap-start">-->
    <!--      section-->
    <!--    </section>-->
  </main>
</template>
<script setup lang="ts">
import TranslateSection from "~/components/sections/translate/TranslateSection.vue";
import HistorySection from "~/components/sections/history/HistorySection.vue";
import CreateAccountSection from "~/components/sections/CreateAccount/CreateAccountSection.vue";
import TranslationPane from "~/components/layouts/TranslationPane.vue";
</script>
<style scoped></style>
