<template>
  <div id="skills" class="skills">
    <div class="title">Skills</div>
    <div class="contents skills-contents">
      <SkillItem
        v-for="skillData in skillsData"
        :key="skillData.id"
        :skillData="skillData"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import SkillItem from "./SkillItem.vue";

const skillsData = ref<Array<{ id: string; name: string; contents: string }>>();

fetch("/skills.json")
  .then((res) => res.json())
  .then((data) => {
    skillsData.value = data;
  });
</script>

<style>
.skills-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px;
}

.skills .title::before {
  background-color: #0356fc;
}
</style>
