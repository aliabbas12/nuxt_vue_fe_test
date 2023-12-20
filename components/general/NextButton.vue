<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
const { text } = props;
</script>

<template>
  <UButton
    size="lg"
    color="white"
    square
    variant="soft"
    class="px-0 py-0 bg-secondary-bg rounded-3xl border-0 shadow group transition ease-in-out delay-50 duration-600"
    :ui="{
      strategy: 'override',
      inline: 'inline-flex items-center justify-center shadow-card',
    }"
  >
    <img
      src="/icons/button-translate.svg"
      height="75"
      width="128"
      style="height: 70px"
      alt="Translate"
    />

    <div class="hidden group-hover:block mr-12 -mx-5 text-actual font-normal">
      {{ text }}
    </div>
  </UButton>
</template>

<style scoped lang="scss"></style>
