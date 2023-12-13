<script setup lang="ts">
import { computed } from "vue";
import { useGeneralStore } from "~/store/general";
import { SystemLanguages } from "~/global/constants/systemLanguages";
const generalStore = useGeneralStore();
const switchLocalePath = useSwitchLocalePath();
const systemLanguages = SystemLanguages;
const selectedLanguage = computed({
  get: () => generalStore.getSelectedLanguageState,
  set: (value) => {
    generalStore.setSelectedLanguageState(value);
  },
});
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
      @click="selectedLanguage = language.code"
    >
      <NuxtLink :to="switchLocalePath(language.code)">{{
        language.code.toUpperCase()
      }}</NuxtLink>
    </div>
    <!--    <div-->
    <!--      class="px-2 hover:bg-primary-bg rounded-3xl hidden group-hover:block transition ease-in-out delay-50 duration-600"-->
    <!--    >-->
    <!--      <NuxtLink :to="switchLocalePath('it')">IT</NuxtLink>-->
    <!--    </div>-->
    <!--    <div class="px-2 hover:bg-primary-bg rounded-3xl">-->
    <!--      <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink>-->
    <!--    </div>-->
  </div>
</template>

<style scoped lang="scss"></style>
