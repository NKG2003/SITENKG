<template>
  <div>
    <NavBar />
    <router-view />
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
