<template>
  <AnimatePresence mode="wait">
    <WelcomeScreen v-if="showWelcome" @loading-complete="handleLoadingComplete" />
  </AnimatePresence>
    <div v-if="!showWelcome">
      <div>
        <center>
          <h1 class="text-4xl font-bold text-white">Welcome to My Portfolio</h1>
        </center>
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