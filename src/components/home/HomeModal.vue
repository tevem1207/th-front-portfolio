<template>
  <TeleportModal :show-modal="isModal">
    <div class="modal-background" @click="closeModal">
      <div class="modal-content" @click.stop>this is the modal {{ index + 1 }}</div>
    </div>
  </TeleportModal>
</template>

<script setup lang="ts">
import TeleportModal from '../TeleportModal.vue';

interface PropsType {
  itemsData: { name: string; contents: string }[];
  isModal: boolean;
  index: number;
  closeModal: () => void;
}
defineProps<PropsType>();
</script>

<style>
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; /* 다른 요소 위에 놓입니다. */
  display: flex; /* 부모 요소를 flex로 설정합니다. */
  align-items: center; /* 수직 방향 가운데 정렬합니다. */
  justify-content: center; /* 수평 방향 가운데 정렬합니다. */
}

.modal-content {
  height: 100px;
  background-color: whitesmoke;
  z-index: 1000; /* 다른 요소 위에 놓입니다. */
}
</style>
