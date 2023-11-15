<template>
  <div class="">
    <div class="h-screen "><NavBar /> <router-view /></div>
    <div class="absolute inset-x-0 bottom-0">
      <Footer />
    </div>
  </div>
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
