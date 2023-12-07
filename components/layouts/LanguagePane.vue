<script setup lang="ts"></script>

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
      class="px-2 hidden group-hover:block hover:bg-primary-bg rounded-3xl transition ease-in-out delay-50 duration-600"
    >
      ES
    </div>
    <div
      class="px-2 hidden group-hover:block hover:bg-primary-bg rounded-3xl transition ease-in-out delay-50 duration-600"
    >
      IT
    </div>
    <div class="px-2 hover:bg-primary-bg rounded-3xl">EN</div>
  </div>
</template>

<style scoped lang="scss"></style>
