<template>
  <div class=" h-full ">
    <NavBar />
    <router-view />
  </div>
  <div class="bottom-0 w-full">
    <HelloWorld />
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
</script>

<script>
export default {
  components: {
    HelloWorld,
    NavBar,
  },
};
</script>

<style></style>
