<template>
  <header><NavBar v-if="!isPrint" /></header>
  <main id="main">
    <AboutIntro />
    <AboutProfile class="main-component" />
    <div v-if="isPrint" class="h-52"></div>
    <AboutSkills class="main-component" />
    <div v-if="isPrint" class="h-96"></div>
    <AboutTeamProjects class="main-component" />
  </main>
  <footer><Footer v-model:isPrint="isPrint" /></footer>
</template>

<script setup lang="ts">
import NavBar from '@/components/about/nav/NavBar.vue';
import Footer from '@/components/about/AboutFooter.vue';
import AboutIntro from '@/components/about/AboutIntro.vue';
import AboutProfile from '@/components/about/AboutProfile.vue';
import AboutSkills from '@/components/about/AboutSkills.vue';
import AboutTeamProjects from '@/components/about/AboutTeamProjects.vue';
import { onUpdated, ref } from 'vue';

const isPrint = ref(false);

onUpdated(() => {
  if (isPrint.value) {
    window.print();
    isPrint.value = false;
  }
});
</script>

<style>
.main-component {
  padding-top: 70px;
  margin-top: 30px;
}
</style>
