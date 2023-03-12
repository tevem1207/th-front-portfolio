<template>
  <TeleportModal :show-modal="isModal">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-contents">this is the modal</div>
  </TeleportModal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TeleportModal from "../TeleportModal.vue";

interface PropsType {
  name: string;
  imgSrc: string;
  content: string;
  showModal: number;
  closeModal: () => void;
}
defineProps<PropsType>();

const isModal = ref(false);
</script>

<style>
.modal-background {
  width: 100px;
  height: 100px;
}
</style>
