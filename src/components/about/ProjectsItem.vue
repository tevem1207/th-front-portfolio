<template>
  <ul v-if="index % 2" class="project-item-contents">
    <li v-for="content in projectData.description" :key="content">
      {{ content }}
    </li>
  </ul>
  <div class="project-item" @click="toProject">
    <img
      :src="getImgUrl(projectData.id)"
      class="project-item-img"
      :alt="projectData.name + ' project image'"
    />
    <div class="project-item-title">
      <div class="project-item-role font-14">
        {{ projectData.role }}
      </div>
      <div class="project-item-name">
        <Logo class="logo" />
        <span class="font-semibold font-18">
          {{ projectData.name }}
        </span>
      </div>
    </div>
  </div>
  <ul v-if="(index + 1) % 2" class="project-item-contents">
    <li v-for="content in projectData.description" :key="content">
      {{ content }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import type { Project } from '@/types';

const props = defineProps<{
  projectData: Project;
  index: number;
}>();

const Logo = defineAsyncComponent(() => import(`../icons/Icon${props.projectData.id}.vue`));

const getImgUrl = (id: string) => {
  return new URL(`../../assets/imgs/${id}.png`, import.meta.url).href;
};

const toProject = () => {
  props.projectData.url && window.open(props.projectData.url, '', '_blank');
};
</script>

<style>
.project-item {
  max-width: 600px;
  width: 100%;
  height: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  border-radius: 10px;
  /* border: 1px solid var(--color-border); */
  background-color: var(--color-background-mute);
  cursor: pointer;
  border: 2px solid var(--color-background-mute);
}

.project-item:hover {
  border-color: var(--color-border);
  filter: brightness(0.99);
}

.project-item:active {
  filter: brightness(0.94);
}

.project-item-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.project-item-title {
  height: calc(100% - 240px);
  padding: 15px;
}

.project-item-role {
  margin-bottom: 7px;
  opacity: 0.8;
}

.project-item-name {
  display: flex;
  align-items: center;
}

.project-item-name .logo {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.project-item-contents {
  display: none;
}

@media (min-width: 600px) {
  .project-item {
    width: calc(50% - 10px);
  }

  .project-item-contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 320px;
    margin-top: 20px;
    width: calc(50% - 10px);
  }

  .project-item-contents li + li {
    margin-top: 10px;
  }
}
</style>
