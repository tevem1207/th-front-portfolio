<template>
  <div class="nav-bar">
    <div class="nav-bar-inner">
      <div class="nav-title font-14">
        <p>황태희</p>
        <p>웹 개발 포트폴리오</p>
      </div>
      <MenuButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuButton from "./MenuButton.vue";
</script>

<style>
.nav-bar {
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-background-soft);
}

.nav-bar-inner {
  max-width: 830px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-title {
  width: 134px;
  margin-left: 18px;
}
</style>
