<script setup lang="ts">
const isHover = ref(false);
</script>

<template>
  <div
    class="container w-4/6 sm:w-3/6 md:w-10/12 lg:w-8/12 xl:w-5/12 pt-[6rem]"
  >
    <div
      class="w-full h-[65px] group items-center rounded-3xl cursor-pointer grid grid-cols-2 gap-4 duration-700 ease-linear"
      :class="[isHover ? 'bg-transparent shadow-none' : 'bg-white shadow-3xl']"
    >
      <div
        class="flex history-bar justify-center items-center w-[100%] px-2 h-[100%] bg-white rounded-3xl group-hover:bg-white hover:shadow-xl hover:justify-between transition-all delay-700 ease-linear duration-300"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
      >
        <span class="text-gray-500">history</span>
        <u-icon
          name="ph:magnifying-glass"
          dynamic
          class="text-gray-800 h-[25px] w-[50px]"
          size="sm"
        />
      </div>
      <div class="w-[100%] h-[100%] flex justify-between items-center px-5">
        <u-icon
          name="ph:squares-four-fill"
          dynamic
          class="text-gray-800 h-10 w-[40px] hover:text-gray-400 rounded transition-all duration-300 ease-in-out"
          size="sm"
        />
        <u-icon
          name="ooui:view-compact"
          dynamic
          class="text-gray-800 h-10 w-[30px] hover:text-gray-400 rounded transition-all duration-300 ease-in-out"
          size="sm"
        />
        <u-icon
          name="ph:list-dashes-fill"
          dynamic
          class="text-gray-800 h-10 w-[40px] hover:text-gray-400 rounded transition-all duration-300 ease-in-out"
          size="sm"
        />
        <u-icon
          name="bx:slider-alt"
          dynamic
          class="text-gray-800 h-10 w-[40px] hover:text-gray-400 rounded transition-all duration-300 ease-in-out"
          size="sm"
        />
        <u-icon
          name="fa6-solid:arrow-down-wide-short"
          dynamic
          class="text-gray-800 h-10 w-[40px] hover:text-gray-400 rounded transition-all duration-300 ease-in-out"
          size="sm"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
