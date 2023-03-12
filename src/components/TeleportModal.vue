<template>
  <teleport to="#modal" v-if="showModal">
    <slot></slot>
  </teleport>
</template>

<script setup lang="ts">
defineProps<{ showModal: boolean }>();
</script>

<style>
#modal {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
