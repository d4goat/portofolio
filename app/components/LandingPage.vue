<template>
  <AnimatePresence mode="wait">
    <WelcomeScreen v-if="showWelcome" @loading-complete="handleLoadingComplete" />
  </AnimatePresence>
    <div v-if="!showWelcome">
      <div>
        <SplitText
          text="Hello, Everyone!"
          class-name="text-2xl font-semibold text-center"
          :delay="50"
          :duration="0.6"
          ease="power3.out"
          split-type="chars"
          :from="{ opacity: 0, y: 40 }"
          :to="{ opacity: 1, y: 0 }"
          :threshold="0.1"
          root-margin="-100px"
          text-align="center"
        />
          <BlurText
    text="Front End"
    :delay="200"
    class-name="text-4xl font-semibold text-center"
    animate-by="words"
    direction="top"
    :threshold="0.1"
    root-margin="0px"
    :step-duration="0.35"
  />
          <BlurText
    text="Developer"
    :delay="300"
    class-name="text-4xl font-semibold text-center"
    animate-by="words"
    direction="top"
    :threshold="0.1"
    root-margin="0px"
    :step-duration="0.35"
  />
      </div>
      <Dock
    :items="items"
    :panel-height="58"
    :base-item-size="40"
    :magnification="50"
    :distance="150"
    :dock-height="150"
    :spring="{ mass: 0.1, stiffness: 150, damping: 12 }"
    />
    </div>
</template>

<script lang="ts" setup>
import { AnimatePresence } from 'motion-v';
const showWelcome = ref(true);

const handleLoadingComplete = () => {
  console.log('Loading completed!'); // Debug log
  showWelcome.value = false;
};

import { h } from 'vue'
  const items = [
    { 
      icon: () => h('i', { class: 'pi pi-home', style: { fontSize: '13px', color: 'white' } }), 
      label: 'Home', 
      onClick: () => console.log('Home clicked!') 
    },
    { 
      icon: () => h('i', { class: 'pi pi-inbox', style: { fontSize: '13px', color: 'white' } }), 
      label: 'Archive', 
      onClick: () => console.log('Archive clicked!') 
    },
    { 
      icon: () => h('i', { class: 'pi pi-user', style: { fontSize: '13px', color: 'white' } }), 
      label: 'Profile', 
      onClick: () => console.log('Profile clicked!') 
    },
    { 
      icon: () => h('i', { class: 'pi pi-cog', style: { fontSize: '13px', color: 'white' } }), 
      label: 'Settings', 
      onClick: () => console.log('Settings clicked!') 
    },
  ];
</script>
<style>

</style>