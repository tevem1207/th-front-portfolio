<template>
  <carousel-3d>
    <slide v-for="(item, i) in itemsData" :key="i" :index="i">
      <img src="https://placehold.it/360x270" />
    </slide>
  </carousel-3d>
</template>

<script setup lang="ts">
import { Carousel3d, Slide } from "vue3-carousel-3d";
import "vue3-carousel-3d/dist/index.css";

defineProps<{ itemsData: { name: string; contents: string }[] }>();
</script>

<style></style>
