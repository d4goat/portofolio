<template>
  <u-app>
    <div class="fixed !min-h-screen !min-w-screen -z-1">
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