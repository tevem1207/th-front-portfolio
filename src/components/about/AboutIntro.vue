<template>
  <div class="intro">
    <div class="intro-title">
      <span class="font-20 font-semibold">성장</span>
      <span class="font-18">하는</span>
      <span class="font-20 font-semibold"> 프론트엔드 개발자 </span>
      <span class="font-18">황태희 입니다.</span>
    </div>
    <div class="intro-contents font-16">
      <p>문제 해결에 열정을 가지고,</p>
      <p>사용자 경험을 최우선으로 생각합니다.</p>
    </div>
    <img class="intro-turtle" src="@/assets/turtle.gif" alt="turtle" />
  </div>
</template>

<script setup lang="ts"></script>

<style>
.intro {
  padding: 0px 30px;
  margin-top: 110px;
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
