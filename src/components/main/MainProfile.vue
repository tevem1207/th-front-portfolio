<template>
  <div id="profile" class="profile">
    <div class="title">Profile</div>
    <div class="profile-contents">
      <div>
        <span class="ssafy-title font-16"> 삼성 청년 SW 아카데미 </span>
        <span> 2022.01 - 2022.12 </span>
      </div>
      <div class="ssafy-detail">
        <p>다양한 프로젝트에서 웹/앱 서비스 출시</p>
        <p>프론트엔드, UI/UX 디자인</p>
        <p>알고리즘을 통한 문제 해결</p>
        <p>우수 교육생 선정</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.profile-contents {
  margin-left: 20px;
  margin-top: 20px;
}

.profile .title::before {
  background-color: #fcd303;
}

.ssafy-title {
  font-weight: 600;
}

.ssafy-detail {
  margin-top: 10px;
  margin-left: 15px;
}

.ssafy-detail p + p {
  margin-top: 5px;
}
</style>
