<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
// import { watch } from "vue";
// watch(
//   () => $route,
//   (i, j) => {
//     console.log(i);
//     console.log(j);
//   }
// );
</script>

<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 5.4vw;
}
</style>
