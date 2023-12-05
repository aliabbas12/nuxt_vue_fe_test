<script setup>
const people = ["English", "Italian"];
const selected = ref([0]);
</script>

<template>
  <div>
    <USelectMenu
      v-model="selected"
      :options="people"
      variant="none"
      class="bg-primary-bg select-language cursor-pointer"
      size="xl"
      trailing-icon=""
      :ui="{
        variant: {
          strategy: 'override',
          none: 'text-xl text-center w-full cursor-pointer',
          form: ' w-full',
        },
      }"
    >
    </USelectMenu>
    <UDivider
      class="mt-0"
      :ui="{
        strategy: 'override',
        border: { base: 'flex border-gray-600 dark:border-gray-800' },
      }"
    />
  </div>
</template>

<style lang="scss">
.select-language {
  span {
    width: 100%;
  }
}
</style>
