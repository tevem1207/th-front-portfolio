<template>
  <header><NavBar /></header>
  <main id="main">
    <RouterView />
  </main>
  <footer><Footer /></footer>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/nav/NavBar.vue";
import Footer from "./components/MyFooter.vue";
</script>

<style>
@media (min-width: 1024px) {
}
</style>
