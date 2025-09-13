<template>
  <u-app>
    <div class="fixed !min-h-screen !min-w-screen -z-1">
      <!-- <Particles
        :particle-count="250"
        :particle-spread="10"
        :speed="0.2"
        :particle-colors="['#ffffff']"
        :move-particles-on-hover="true"
        :particle-hover-factor="1"
        :alpha-particles="false"
        :particle-base-size="100"
        :size-randomness="1"
        :camera-distance="25"
        :disable-rotation="false"
        class="w-full h-full bg-black overflow-hidden"
      /> -->

      <Beams
      :beam-width="2"
      :beam-height="30"
      :beam-number="20"
      :light-color="'#ffffff'"
      :speed="2"
      :noise-intensity="1.75"
      :scale="0.2"
      :rotation="30"
      class=""
    />
    </div>
    <div class="">
      <nuxt-page class="font-inter" />
    </div>
  </u-app>
</template>

<script setup lang="ts"></script>

<style scoped>
</style>