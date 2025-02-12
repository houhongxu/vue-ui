<script setup lang="ts">
import Count from "./components/Count.vue";
import Button from "./components/Button";
import Text from "./components/Text";
</script>

<template>
  <a href="https://vuejs.org/" target="_blank">
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  </a>

  <Count msg="Vue" />
  <Button text="我是按钮"></Button>
  <Text></Text>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
}
</style>
