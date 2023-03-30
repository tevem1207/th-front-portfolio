<template>
  <div @click="setModalIndex(index)">
    <img src="https://placehold.it/360x300" />
    {{ name }}
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  name: string;
  content: string;
  index: number;
  setModalIndex: (index: number) => void;
  imgSrc: string;
}
defineProps<PropsType>();
</script>
