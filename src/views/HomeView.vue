<template>
  <div>Home</div>
  <HomeCarousel :items-data="items" />
</template>

<script setup lang="ts">
import HomeCarousel from "@/components/home/HomeCarousel.vue";

const items = [
  { name: "1", contents: "" },
  { name: "2", contents: "" },
  { name: "3", contents: "" },
  { name: "4", contents: "" },
  { name: "5", contents: "" },
  { name: "6", contents: "" },
  { name: "7", contents: "" },
  { name: "8", contents: "" },
  { name: "9", contents: "" },
  { name: "10", contents: "" },
  { name: "11", contents: "" },
];
</script>
