<template>
  <div class="intro">
    <div class="intro-title">
      <span class="font-20 font-semibold">성장</span>
      <span class="font-18">하는</span>
      <span class="font-20 font-semibold"> 개발자 황태희</span>
      <span class="font-18">입니다.</span>
    </div>
    <div class="intro-contents font-16">
      <p>삼성 청년 소프트웨어 아카데미에서</p>
      <p>웹 개발에 대한 이해도를 높였고,</p>
      <p>다양한 프로젝트를 통해 하루하루</p>
      <p>성장하고 있습니다.</p>
    </div>
    <img class="intro-turtle" src="@/assets/turtle.gif" alt="turtle" />
  </div>
</template>

<script setup lang="ts"></script>

<style>
.intro {
  padding: 0px 30px;
}

.intro-contents {
  margin-top: 15px;
}

.intro-contents p + p {
  margin-top: 3px;
}

.intro-turtle {
  position: absolute;
  top: max(calc(15vmin - 160px), -110px);
  right: calc(-50px + 18vmin);
  z-index: 0;
  width: calc(50px + 15vmin);
  height: calc(50px + 15vmin);
}
</style>
