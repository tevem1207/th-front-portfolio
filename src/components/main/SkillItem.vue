<template>
  <div
    @mouseover="setLevel(true)"
    @mouseleave="setLevel(false)"
    class="skill-item"
  >
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
    <Transition name="level">
      <div v-if="isLevel" class="skill-item-level">
        <div
          class="skill-item-level-bar bar"
          :style="{
            width: `${props.skillData.level}%`,
            backgroundColor: `${props.skillData.color}`,
          }"
        ></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import type { Skill } from "@/types";

const props = defineProps<{
  skillData: Skill;
}>();
const Logo = defineAsyncComponent(
  () => import(`../icons/Icon${props.skillData.id}.vue`)
);
const isLevel = ref(false);

const setLevel = (value: boolean) => {
  isLevel.value = value;
};
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
  overflow: hidden;

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

.skill-item-level {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-border);
}

.skill-item-level-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  opacity: 0.6;
}

.level-enter-active,
.level-leave-active {
  transition: opacity 0.5s ease;
}

.level-enter-from,
.level-leave-to {
  opacity: 0;
}

.level-enter-active .bar,
.level-leave-active .bar {
  transition: all 0.5s ease;
}

.level-enter-from .bar,
.level-leave-to .bar {
  transform: translateX(-100%);
}

@media (min-width: 600px) {
  .skill-item {
    width: calc(50% - 10px);
  }
}
</style>
