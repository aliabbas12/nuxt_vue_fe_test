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
const { text } = props;
const viewport = useViewport();
</script>

<template>
  <div class="group flex items-center justify-center">
    <u-card
      class="flex-initial w-64 p-0 rounded-3xl history-card col-span-1 my-[1rem] transition ease-in-out delay-50 duration-600 group-hover:-translate-x-2"
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
    <UButton
      size="sm"
      square
      variant="soft"
      block
      class="hidden py-0 bg-primary-bg rounded-3xl border-0 flex-initial w-15 px-1 group-hover:block"
    >
      <template #leading>
        <UAvatar
          src="/icons/trash.svg"
          class="rounded-none"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
          }"
          :size="viewport.isLessThan('tablet') ? '2xs' : '2xs'"
        />
      </template>
    </UButton>
    <UButton
      size="sm"
      square
      variant="soft"
      block
      class="hidden px-0 py-0 bg-primary-bg rounded-3xl border-0 flex-initial w-15 px-1 group-hover:block transform scale-0 transition-transform duration-600 group-hover:scale-100"
    >
      <template #leading>
        <UAvatar
          src="/icons/history.svg"
          class="rounded-none"
          :ui="{
            strategy: 'override',
            rounded: 'rounded-none',
          }"
          :size="viewport.isLessThan('tablet') ? '2xs' : '2xs'"
        />
      </template>
    </UButton>
  </div>
</template>

<style scoped lang="scss"></style>
