<template>
  <ul class="nav-menu-list nav-not-burger">
    <li
      @click="() => scrollToElement('profile')"
      class="nav-menu-list-item font-16"
    >
      Profile
    </li>
    <li
      @click="() => scrollToElement('skills')"
      class="nav-menu-list-item font-16"
    >
      Skills
    </li>
    <li
      @click="() => scrollToElement('projects')"
      class="nav-menu-list-item font-16"
    >
      Projects
    </li>
  </ul>
  <div class="nav-burger">
    <IconMenuBurger @click="setIsMenu" class="icon-24 icon-burger" />
    <ul v-if="isMenu" class="nav-menu-list">
      <li
        @click="() => scrollToElement('profile')"
        class="nav-menu-list-item font-16"
      >
        Profile
      </li>
      <li
        @click="() => scrollToElement('skills')"
        class="nav-menu-list-item font-16"
      >
        Skills
      </li>
      <li
        @click="() => scrollToElement('projects')"
        class="nav-menu-list-item font-16"
      >
        Projects
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconMenuBurger from "../icons/IconMenuBurger.vue";

const isMenu = ref(false);
const setIsMenu = () => {
  isMenu.value = !isMenu.value;
};

const scrollToElement = (targetId: string) => {
  const el = document.getElementById(targetId);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>

<style>
.icon-burger {
  margin-right: 18px;
  fill: var(--color-text);
}

.nav-menu-list {
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-menu-list-item {
  list-style: none;
  text-align: center;
}

.nav-menu-list-item:hover {
  background-color: var(--color-background-mute);
  cursor: pointer;
}

@media (max-width: 599px) {
  .nav-not-burger {
    display: none;
  }

  .nav-menu-list {
    width: 150px;
    position: absolute;
    top: 50px;
    right: 5px;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid var(--color-border);
    background-color: var(--color-background-soft);
    opacity: 0.9;
  }

  .nav-menu-list-item {
    width: 100%;
    padding: 10px;
  }

  .nav-menu-list-item + .nav-menu-list-item {
    border-top: 1px solid var(--color-border);
  }
}

@media (min-width: 600px) {
  .nav-burger {
    display: none;
  }

  .nav-menu-list {
    position: relative;
    flex-direction: row;
    margin-right: 5px;
  }

  .nav-menu-list-item {
    padding: 10px;
    width: 100px;
    height: 100%;
    border-radius: 5px;
  }

  .nav-menu-list-item:hover {
    box-shadow: inset 0 0 0 1px var(--color-border);
  }
}
</style>
