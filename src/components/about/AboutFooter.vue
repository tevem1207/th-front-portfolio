<template>
  <div v-if="!isPrint" class="flex flex-col items-center justify-center mt-14 p-4 gap-4">
    <button
      @click="handlePrintClick"
      class="flex items-center gap-1 text-sm p-2 px-3 rounded-md hover:bg-gray-200 active:bg-gray-300"
    >
      <p>포트폴리오 인쇄</p>
      <PrinterIcon class="size-4" />
    </button>
    <p class="text-sm">©2023 Taehee Hwang All rights reserved</p>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { PrinterIcon } from '@heroicons/vue/16/solid';

const props = defineProps({
  isPrint: Boolean,
});

console.log(props.isPrint);
const emit = defineEmits(['update:isPrint']);

const handlePrintClick = () => {
  emit('update:isPrint', true);
};
</script>
