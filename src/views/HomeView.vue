<template>
  <div
    class="z-10 text-base body-font text-teal-950 w-auto flex flex-col lg:flex-row justify-center lg:h-screen"
  >
    <div class="lg:mt-20">
      <Home_1 />
    </div>
    <div class="flex flex-col lg:w-1/4 mx-7 -mt-10 lg:mt-0">
      <div class="bg-white mb-6 pb-4 mt-20 shadow-2xl rounded-lg h-64">
        <Home_2 />
      </div>

      <div class="bg-white pb-4 mb-4 shadow-2xl rounded-lg h-64">
        <Home_2 />
      </div>
    </div>
  </div>
</template>

<script setup>
import Home_1 from "@/components/Home_1.vue";
import Home_2 from "@/components/Home_2.vue";
</script>

<script>
export default {
  components: {
    Home_1,
    Home_2,
  },
};
</script>
