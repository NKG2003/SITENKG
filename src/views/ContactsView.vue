<template>
  <div class="relative flex flex-col">
    <Contact />
    <Map />
    <FeedBack />
  </div>
</template>

<script setup>
import FeedBack from "@/components/FeedBack.vue";
import Contact from "@/components/Contact.vue";
import Map from "@/components/Map.vue";
</script>

<script>
export default {
  components: {
    FeedBack,
    Contact,
    Map,
  },
};
</script>
