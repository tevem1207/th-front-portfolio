<template>
  <div id="home">
    Home
    <HomeCarousel :items-data="items" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import HomeCarousel from "@/components/home/HomeCarousel.vue";

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};
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

onMounted(() => {
  window.addEventListener("resize", setScreenSize);
});
onUnmounted(() => {
  window.removeEventListener("resize", setScreenSize);
});
</script>

<style>
#home {
  height: calc(var(--vh, 1vh) * 100);
  background-color: black;
}
</style>
