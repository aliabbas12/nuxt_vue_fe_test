<template>
  <main class="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">
    <section id="section-1" class="w-full h-screen bg-primary-bg snap-start">
      <MainSection />
    </section>
    <section id="section-2" class="w-full h-screen bg-primary-bg snap-start">
      <HistorySection />
    </section>
    <section id="section-3" class="w-full h-screen bg-secondary-bg snap-start">
      <CreateAccountSection />
    </section>
    <section id="section-4" class="w-full h-screen bg-primary-bg snap-start">
      section
    </section>
    <section class="w-full h-screen bg-secondary-bg snap-start">
      section
    </section>
  </main>
</template>
<script setup lang="ts">
import MainSection from "~/components/home/MainSection.vue";
import HistorySection from "~/components/home/HistorySection.vue";
import CreateAccountSection from "~/components/home/CreateAccountSection.vue";
</script>
<style scoped></style>
