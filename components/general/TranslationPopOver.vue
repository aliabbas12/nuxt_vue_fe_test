<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "basic",
  },
  text: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
    required: true,
  },
});
const { text, type } = props;
</script>

<template>
  <u-card
    class="p-0 rounded-3xl history-card col-span-1 my-[1rem] mx-[2.5rem] hover:ml-0 hover:mr-[4rem] transition ease-in-out delay-50 duration-600 hover:-translate-x-2"
    :ui="{
      strategy: 'override',
      shadow: 'shadow-none',
      body: {
        padding: 'px-4 py-2',
      },
    }"
  >
    <div class="w-full">
      <div class="flex h-full">
        <div class="flex-none flex items-center justify-center px-2">
          <UAvatar
            src="/icons/verified.svg"
            class="rounded-none"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-none',
            }"
            size="xs"
          />
        </div>
        <div class="py-4 flex flex-col justify-center">
          <div class="leading-[18px]">{{ text }}</div>
          <div class="leading-[18px] text-secondary">{{ translation }}</div>
        </div>
      </div>
    </div>
  </u-card>
</template>

<style scoped lang="scss"></style>
