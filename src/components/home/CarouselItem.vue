<template>
  <img src="https://placehold.it/360x300" />
  {{ name }}
</template>

<script setup lang="ts">
interface PropsType {
  name: string;
  imgSrc: string;
  content: string;
}
defineProps<PropsType>();
</script>
