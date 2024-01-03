<script setup>
import { ref, onMounted, watchEffect } from "vue";
const content = ref("");
const tokens = ref([]);

onMounted(() => {
  const contenteditableDiv = document.getElementById("div");
  if (contenteditableDiv != null) contenteditableDiv.innerText = content.value;
});

watchEffect(() => {
  tokens.value = [];
  const contenteditableDiv = document.getElementById("div");
  const wordsWithSpan = content.value
    .split(" ")
    .map((word) => {
      tokens.value.push(word);
      return `<span class="word">${word}</span>`;
    })
    .join(" ");

  if (contenteditableDiv != null) contenteditableDiv.innerHTML = wordsWithSpan;
});

const handleInput = (event) => {
  content.value = event.target.innerText;
};
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    input box
    <div
      id="div"
      contenteditable="true"
      class="border-2 border-black text-center w-2/4 text-4xl"
      @focusout="handleInput"
    ></div>
    <ul>
      <li v-for="(token, index) in tokens" :key="index">
        {{ token }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>
