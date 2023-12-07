<script setup lang="ts">
const viewport = useViewport();
</script>

<template>
  <div class="container flex flex-wrap md:px-3 lg:px-5 w-3/4">
    <div class="w-1/4 text-center">
      <UButton
        size="lg"
        color="bg-primary-bg"
        square
        variant="soft"
        block
        class="px-0 py-0 bg-primary-bg rounded-3xl border-0"
      >
        <template #leading>
          <UAvatar
            src="/icons/keyboard.svg"
            class="rounded-none"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            :size="viewport.isLessThan('tablet') ? 'sm' : 'md'"
          />
        </template>
      </UButton>
    </div>
    <div class="w-1/4 text-center">
      <UButton
        size="lg"
        color="bg-primary-bg"
        square
        variant="soft"
        block
        class="px-0 py-0 bg-primary-bg rounded-3xl border-0"
      >
        <template #leading>
          <UAvatar
            src="/icons/microphone.svg"
            class="rounded-none"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            :size="viewport.isLessThan('tablet') ? 'sm' : 'md'"
          />
        </template>
      </UButton>
    </div>
    <div class="w-1/4 text-center">
      <UButton
        size="lg"
        color="bg-primary-bg"
        square
        variant="soft"
        block
        class="px-0 py-0 bg-primary-bg rounded-3xl border-0"
      >
        <template #leading>
          <UAvatar
            src="/icons/Speaker-solid2.svg"
            class="rounded-none"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            :size="viewport.isLessThan('tablet') ? 'sm' : 'md'"
          />
        </template>
      </UButton>
    </div>
    <div class="w-1/4 text-center">
      <UButton
        size="lg"
        color="bg-primary-bg"
        square
        variant="soft"
        block
        class="px-0 py-0 bg-primary-bg rounded-3xl border-0"
      >
        <template #leading>
          <UAvatar
            src="/icons/button-restart.svg"
            class="rounded-none"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            :size="viewport.isLessThan('tablet') ? 'sm' : 'md'"
          />
        </template>
      </UButton>
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
