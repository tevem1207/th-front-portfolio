<template>
  <Carousel3d
    :width="360"
    :height="400"
    :space="500"
    :inverse-scaling="600"
    :display="9"
    :on-main-slide-click="openModal"
  >
    <Slide v-for="(item, i) in itemsData" :key="i" :index="i">
      <CarouselItem
        :name="item.name"
        :content="item.contents"
        :index="i"
        :set-modal-index="setModalIndex"
        img-src="https://placehold.it/360x300"
      />
    </Slide>
  </Carousel3d>
  <HomeModal
    :items-data="itemsData"
    :is-modal="isModal"
    :index="modalIndex"
    :close-modal="closeModal"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Carousel3d, Slide } from 'vue3-carousel-3d';
import CarouselItem from './CarouselItem.vue';
import HomeModal from './HomeModal.vue';

interface PropsType {
  itemsData: { name: string; contents: string }[];
}
defineProps<PropsType>();

const modalIndex = ref(0);
const isModal = ref(false);
const setModalIndex = (index: number) => {
  modalIndex.value = index;
};
const openModal = () => {
  isModal.value = true;
  console.log(modalIndex.value);
};
const closeModal = () => {
  isModal.value = false;
};
</script>

<style>
.carousel-3d-slide {
  border-radius: 5px;
}
</style>
