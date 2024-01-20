<script setup lang="ts">
import { DndProvider } from "vue3-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Example from "~/components/Example.vue";
import AddNewWord from "~/components/models/AddNewWord.vue";
</script>

<template>
  <DndProvider :backend="HTML5Backend">
    <Example />
  </DndProvider>
  <AddNewWord />
</template>

<style scoped lang="scss"></style>
