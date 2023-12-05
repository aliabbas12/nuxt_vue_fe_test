<script setup>
const value = ref("");
</script>

<template>
  <div>
    <UTextarea
      v-model="value"
      variant="none"
      size="xl"
      :autoresize="true"
      textarea-class=" mb-[1rem] mt-[2rem] text-5xl text-center tracking-wider"
    />
    <div class="w-full flex flex-auto my-3 pr-1 w-1/4 text-center">
      <span class="w-6/12 text-right tracking-wider text-primary"
        >à è é ì ò ù
      </span>
      <span class="w-6/12 text-secondary pl-3 font-light text-left">
        40 / 160</span
      >
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
