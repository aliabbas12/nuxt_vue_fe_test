<template>
  <main
    id="custom-scroll"
    class="max-h-screen w-[100vw] overflow-y-auto snap snap-y snap-mandatory"
  >
    <section
      id="section-1"
      ref="div1"
      class="w-full h-screen bg-primary-bg snap-start"
    >
      <TranslateSection />
    </section>
    <section
      id="section-2"
      ref="div2"
      class="w-full h-screen bg-primary-bg snap-start overflow-y-auto"
    >
      <HistorySection />
    </section>
    <section
      id="section-3"
      ref="div3"
      class="w-full h-screen bg-secondary-bg snap-start overflow-y-auto"
    >
      <CreateAccountSection />
    </section>
    <section
      id="section-4"
      ref="div4"
      class="w-full h-screen bg-primary-bg snap-start overflow-y-auto"
    >
      <ContactUsSection />
    </section>
    <section
      id="section-5"
      class="w-full bg-secondary-bg snap-start overflow-y-auto"
    >
      <ContactUsSocial />
    </section>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import TranslateSection from "~/components/sections/translate/TranslateSection.vue";
import HistorySection from "~/components/sections/history/HistorySection.vue";
import CreateAccountSection from "~/components/sections/CreateAccount/CreateAccountSection.vue";
import ContactUsSection from "~/components/sections/contactUs/ContactUsSection.vue";
import ContactUsSocial from "~/components/sections/about/AboutSection.vue";
import { useGeneralStore } from "~/store/general";
const generalStore = useGeneralStore();

const currentSection = computed({
  get: () => generalStore.getCurrentSectionState,
  set: (value) => {
    generalStore.setCurrentSectionState(value);
  },
});

const div1 = ref(null);
const div2 = ref(null);
const div3 = ref(null);
const div4 = ref(null);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentSection.value = entry.target.id;
      }
    });
  },
  { threshold: 0.5 },
);

onMounted(() => {
  observer.observe(div1.value);
  observer.observe(div2.value);
  observer.observe(div3.value);
  observer.observe(div4.value);
});
</script>
<style scoped>
#custom-scroll::-webkit-scrollbar {
  width: 0.1px;
}
</style>
