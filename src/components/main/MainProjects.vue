<template>
  <div id="projects" class="projects">
    <div class="title">Projects</div>
    <div class="contents projects-contents">
      <ProjectsItem
        v-for="(projectData, index) in projectsData"
        :projectData="projectData"
        :index="index"
        :key="projectData.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProjectsItem from "./ProjectsItem.vue";
import type { Project } from "@/types";

const projectsData = ref<Array<Project>>();

fetch("/projects.json")
  .then((res) => res.json())
  .then((data) => {
    projectsData.value = data;
  });
</script>

<style>
.projects-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px;
}

.projects .title::before {
  background-color: #fc5203;
}
</style>
