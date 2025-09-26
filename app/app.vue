<template>
  <Analytics/>
  <u-app :toaster="{ 
    position: 'bottom-right',
    expand: true,
    duration: 5000 
  }"
    :tooltip="{
      delayDuration: 100
    }"
  >
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
      <footer v-if="!welcome.welcome" id="footer" class="text-center py-4 border-t border-neutral-400" :class="route.fullPath == '/' ? 'md:mt-10 mt-6' : ''">
        <span class="md:text-lg">© 2025 Dilzz. All Rights Reserved.</span>
      </footer>
    </div>
  </u-app>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import { useSetWelcome } from '#imports';

const route = useRoute()
const welcome = useSetWelcome()
</script>
<style scoped>
</style>