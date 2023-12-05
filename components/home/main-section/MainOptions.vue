<script setup lang="ts"></script>

<template>
  <div class="flex flex-wrap px-5">
    <div class="w-1/4 text-center">
      <UAvatar
        src="/icons/keyboard.svg"
        class="rounded-none"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-none',
        }"
        size="md"
      />
    </div>
    <div class="w-1/4 text-center">
      <UAvatar
        src="/icons/microphone.svg"
        class="rounded-none"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-none',
        }"
        size="md"
      />
    </div>
    <div class="w-1/4 text-center">
      <UAvatar
        src="/icons/Speaker-solid2.svg"
        class="rounded-none"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-none',
        }"
        size="md"
      />
    </div>
    <div class="w-1/4 text-center">
      <UAvatar
        src="/icons/button-restart.svg"
        class="rounded-none"
        :ui="{
          strategy: 'override',
          rounded: 'rounded-none',
        }"
        size="md"
      />
    </div>
  </div>
  <UDivider
    class="mt-4"
    :ui="{
      strategy: 'override',
      border: { base: 'flex border-gray-600 dark:border-gray-800' },
    }"
  />
</template>

<style scoped lang="scss"></style>
