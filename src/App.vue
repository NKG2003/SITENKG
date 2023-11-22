<template>
  <NavBar />
  <router-view />
  <Footer />
</template>

<script setup>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
</script>

<script>
export default {
  components: {
    Footer,
    NavBar,
  },
};
</script>

<style></style>
