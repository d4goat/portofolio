<template>
  <AnimatePresence mode="wait">
    <WelcomeScreen v-if="showWelcome" @loading-complete="$emit('update:showWelcome', false)" />
    <div v-else>
      tess
      <Bar/>
    </div>
  </AnimatePresence>
</template>

<script lang="ts" setup>
import { AnimatePresence } from 'motion-v';
const props = defineProps<{
  showWelcome: boolean
}>()
</script>
<style>

</style>