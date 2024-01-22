<script setup lang="ts">
import { DndProvider } from "vue3-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Example from "~/components/Example.vue";
import AddWordTranslationModel from "~/components/models/AddWordTranslationModel.vue";
</script>

<template>
  <div>
    <DndProvider :backend="HTML5Backend">
      <Example />
    </DndProvider>
    <AddWordTranslationModel />
  </div>
</template>

<style scoped lang="scss"></style>
