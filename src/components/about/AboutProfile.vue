<template>
  <div id="profile" class="profile">
    <div class="title">Profile</div>
    <div class="profile-container" v-for="profileData in profilesData" :key="profileData.id">
      <div>
        <span class="profile-title font-16"> {{ profileData.title }} </span>
        <span class="profile-period">
          {{ profileData.startAt }} - {{ profileData.endAt }} ({{ getDuration(profileData) }})
        </span>
      </div>
      <div class="profile-content">
        <p v-for="content in profileData.contents" :key="content">
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Profile } from '@/types';

const profilesData = ref<Array<Profile>>();
const getDuration = (profileData: Profile) => {
  const startDate = new Date(profileData.startAt);
  const endDate = new Date(profileData.endAt);

  const yearDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthDiff = endDate.getMonth() - startDate.getMonth();

  if (monthDiff >= 11) {
    return `${yearDiff + 1}년`;
  }

  if (yearDiff === 0) {
    return `${monthDiff + 1}개월`;
  }

  return `${yearDiff}년 ${monthDiff + 1}개월`;
};

fetch('/profile.json')
  .then(res => res.json())
  .then(data => {
    profilesData.value = data;
  });
</script>

<style>
.profile-container {
  margin-top: 20px;
  padding: 20px;
}

.profile .title::before {
  background-color: #fcd303;
}

.profile-title {
  font-weight: 600;
}

.profile-period {
  margin-left: 10px;
}

.profile-content {
  margin-top: 10px;
  margin-left: 15px;
}

.profile-content p + p {
  margin-top: 5px;
}
</style>
