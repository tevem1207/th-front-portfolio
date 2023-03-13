<template>
  <Carousel3d
    :width="360"
    :height="400"
    :space="500"
    :inverse-scaling="600"
    :display="9"
    :onMainSlideClick="() => {}"
  >
    <Slide v-for="(item, i) in itemsData" :key="i" :index="i">
      <CarouselItem
        :name="item.name"
        :content="item.contents"
        img-src="https://placehold.it/360x300"
      />
      <HomeModal
        :name="item.name"
        :content="item.contents"
        img-src="https://placehold.it/360x300"
        :show-modal="showModal"
        :index="i"
        :close-modal="closeModal"
      />
    </Slide>
  </Carousel3d>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Carousel3d, Slide } from "vue3-carousel-3d";
import CarouselItem from "./CarouselItem.vue";
import HomeModal from "./HomeModal.vue";

interface PropsType {
  itemsData: { name: string; contents: string }[];
}
defineProps<PropsType>();

const showModal = ref(-1);
const openModal = (index: number) => {
  console.log(index);
  showModal.value = index;
};
const closeModal = () => {
  showModal.value = -1;
};
</script>

<style>
.carousel-3d-slide {
  border-radius: 5px;
}
</style>
