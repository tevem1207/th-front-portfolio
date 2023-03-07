<template>
  <MainIntro />
  <MainProfile class="main-component" />
  <MainSkills class="main-component" />
  <MainTeamProjects class="main-component" />
</template>

<script setup lang="ts">
import MainIntro from "@/components/main/MainIntro.vue";
import MainProfile from "@/components/main/MainProfile.vue";
import MainSkills from "@/components/main/MainSkills.vue";
import MainTeamProjects from "@/components/main/MainTeamProjects.vue";
</script>

<style>
.main-component {
  padding-top: 70px;
  margin-top: 30px;
}
</style>
