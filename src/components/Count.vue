<script setup lang="ts">
import { computed, ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

const a = computed(() => count.value + "11");
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is {{ a }}</button>
</template>

<style scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto #646cff;
}
</style>
