<template>
  <div id="projects" class="team">
    <div class="title">Toy Projects</div>
    <div class="contents team-contents">
      <ProjectsItem
        v-for="(projectData, index) in projectsData"
        :project-data="projectData"
        :index="index"
        :key="projectData.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectsItem from './ProjectsItem.vue';
import type { Project } from '@/types';

const projectsData = ref<Array<Project>>();

fetch('/team.json')
  .then(res => res.json())
  .then(data => {
    projectsData.value = data;
  });
</script>

<style>
.team-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px;
}

.team .title::before {
  background-color: #fc5203;
}
</style>
