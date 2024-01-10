<script setup lang="ts">
import { DndProvider } from "vue3-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Example from "~/components/Example.vue";
</script>

<template>
  <DndProvider :backend="HTML5Backend">
    <Example />
  </DndProvider>
</template>

<style scoped lang="scss"></style>
