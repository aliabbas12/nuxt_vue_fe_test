<script setup lang="ts">
import { ref, computed } from "vue";
const text = ref("");

const textSizeAccordingToLength = computed(() => {
  if (text.value.length > 60 && text.value.length < 120) {
    return "text-4xl";
  } else if (text.value.length >= 120) {
    return "text-3xl";
  } else return "text-5xl";
});
// const { $api } = useNuxtApp();
//
// const SearchText = reactive({
//   text: String,
// });

// function handleSubmit() {
//   try {
//     const credentials = {
//       text: SearchText.text,
//     };
//
//     const response = await $api.auth.login(credentials);
//     console.log(response);
//     // allow user access into the app
//   } catch (error) {
//     console.error(error);
//   }
// }
</script>

<template>
  <div>
    <UTextarea
      v-model="text"
      variant="none"
      size="xl"
      :autoresize="true"
      :textarea-class="`${textSizeAccordingToLength} mb-[1rem] mt-[2rem]  text-center tracking-wider`"
    />
    <div class="w-full flex flex-auto my-3 pr-1 text-center">
      <span class="w-6/12 text-right tracking-wider text-primary"
        >à è é ì ò ù
      </span>
      <span class="w-6/12 text-secondary pl-3 font-light text-left">
        {{ text.length }} / 160</span
      >
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
