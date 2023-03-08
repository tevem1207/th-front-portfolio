<template>
  <header><NavBar /></header>
  <main id="main">
    <AboutIntro />
    <AboutProfile class="main-component" />
    <AboutSkills class="main-component" />
    <AboutTeamProjects class="main-component" />
  </main>
  <footer><Footer /></footer>
</template>

<script setup lang="ts">
import NavBar from "@/components/about/nav/NavBar.vue";
import Footer from "@/components/about/MyFooter.vue";
import AboutIntro from "@/components/about/AboutIntro.vue";
import AboutProfile from "@/components/about/AboutProfile.vue";
import AboutSkills from "@/components/about/AboutSkills.vue";
import AboutTeamProjects from "@/components/about/AboutTeamProjects.vue";
</script>

<style>
.main-component {
  padding-top: 70px;
  margin-top: 30px;
}
</style>
