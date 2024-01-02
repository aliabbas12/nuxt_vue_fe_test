<script setup lang="ts">
import { computed } from "vue";
import { useGeneralStore } from "~/store/general";
import { SystemLanguages } from "~/global/constants/systemLanguages";
const generalStore = useGeneralStore();
const switchLocalePath = useSwitchLocalePath();
const systemLanguages = SystemLanguages;
const toast = useToast();
const selectedLanguage = computed({
  get: () => generalStore.getSelectedLanguageState,
  set: (value) => {
    generalStore.setSelectedLanguageState(value);
  },
});

function setLanguage(code: string) {
  selectedLanguage.value = code;
  toast.add({ title: "Language changed", timeout: 2000 });
}
</script>

<template>
  <div
    class="flex px-2 py-1 group hover:bg-secondary-bg m-3 rounded-full transition ease-in-out delay-50 duration-600 hover:-translate-x-2"
  >
    <UAvatar
      src="/icons/globe.svg"
      class="rounded-none"
      :ui="{
        strategy: 'override',
      }"
      size="xs"
    />
    <div
      v-for="(language, index) in systemLanguages"
      :key="index"
      :class="`px-2 hover:bg-primary-bg rounded-3xl ${
        selectedLanguage == language.code
          ? ''
          : 'hidden group-hover:block transition ease-in-out delay-50 duration-600'
      } `"
      @click="setLanguage(language.code)"
    >
      <NuxtLink :to="switchLocalePath(language.code)">{{
        language.code.toUpperCase()
      }}</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
