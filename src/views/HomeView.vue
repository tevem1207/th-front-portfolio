<template>
  <div id="home">
    <HomeCarousel class="home-carousel" :items-data="items" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import HomeCarousel from '@/components/home/HomeCarousel.vue';

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
const items = [
  { name: 'Project1', contents: 'Description of Project1' },
  { name: 'Project2', contents: 'Description of Project2' },
  { name: 'Project3', contents: 'Description of Project3' },
];

onMounted(() => {
  window.addEventListener('resize', setScreenSize);
});
onUnmounted(() => {
  window.removeEventListener('resize', setScreenSize);
});
</script>

<style>
#home {
  height: calc(var(--vh, 1vh) * 100);
  background-color: black;
  display: grid;
  align-content: center;
}

.home-carousel {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}
</style>
