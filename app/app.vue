<template>
  <u-app :toaster="{ 
    position: 'bottom-right',
    expand: true,
    duration: 5000 
  }">
  <UToaster/>
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
      <footer id="footer" class="text-center py-4 border-t border-neutral-400 mt-5">
        <span class="text-lg">© 2025 Dilzz. All Rights Reserved.</span>
      </footer>
    </div>
  </u-app>
</template>

<script setup lang="ts"></script>

<style scoped>
</style>