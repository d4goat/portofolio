<template>
  <u-app>
    <div class="">
      <Particles
        :particle-count="200"
        :particle-spread="10"
        :speed="0.1"
        :particle-colors="['#ffffff']"
        :move-particles-on-hover="true"
        :particle-hover-factor="1"
        :alpha-particles="false"
        :particle-base-size="100"
        :size-randomness="1"
        :camera-distance="20"
        :disable-rotation="false"
        class="w-screen h-screen bg-black -z-50"
      />
    </div>
    <div class="">
      <nuxt-page />
    </div>
  </u-app>
</template>
<style scoped>
.particles-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; /* Menempatkan di belakang konten */
  background: black;
}

.main-content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  /* Background transparan agar particles terlihat */
  background: transparent;
}
</style>

<script setup lang="ts"></script>
