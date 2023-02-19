<template>
  <div class="skill-item">
    <div class="skill-item-title">
      <Logo class="logo" />
      <p class="font-bold font-12">
        {{ skillData.name }}
      </p>
    </div>
    <ul class="skill-item-contents">
      <li v-for="content in skillData.contents" :key="content">
        {{ content }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const props = defineProps<{
  skillData: { id: string; name: string; contents: string };
}>();
const Logo = defineAsyncComponent(
  () => import(`../icons/Icon${props.skillData.id}.vue`)
);
</script>

<style>
.skill-item {
  max-width: 600px;
  width: 100%;
  min-height: 120px;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  margin-top: 20px;
  border-radius: 10px;

  background-color: var(--color-background-mute);
}

.skill-item-title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  height: 60px;

  font-weight: bold;
}

.skill-item-title .logo {
  width: 40px;
  height: 40px;
}

.skill-item-contents {
  width: 100%;
  margin-left: 20px;
  padding-inline-start: 20px;

  font-size: 13px;
}

.skill-item-contents li + li {
  margin-top: 6px;
}

@media (min-width: 600px) {
  .skill-item {
    width: calc(50% - 10px);
  }
}
</style>
