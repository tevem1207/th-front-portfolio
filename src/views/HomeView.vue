<template>
  <MainIntro ref="introElement" />
  <MainProfile ref="profileElement" />
  <MainSkills ref="skillsElement" />
  <MainProjects ref="projectsElement" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import MainIntro from "@/components/main/MainIntro.vue";
import MainProfile from "@/components/main/MainProfile.vue";
import MainSkills from "@/components/main/MainSkills.vue";
import MainProjects from "@/components/main/MainProjects.vue";
</script>

<style>
.intro {
  margin-top: 110px;
}
.profile,
.skills,
.projects {
  padding-top: 70px;
  margin-top: 30px;
}
</style>
