<script setup lang="ts">
const emit = defineEmits(["callEvent"]);
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
function buttonCLicked() {
  emit("callEvent");
}
const { text } = props;
</script>

<template>
  <UButton
    size="lg"
    color="white"
    square
    variant="soft"
    class="px-0 py-0 bg-secondary-bg rounded-3xl border-0 shadow group"
    :ui="{
      strategy: 'override',
      inline: 'inline-flex items-center justify-center shadow-card',
      base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed transition ease-in-out delay-50 duration-600 disabled:opacity-75 flex-shrink-0 shadow-card',
    }"
    @click="buttonCLicked"
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
