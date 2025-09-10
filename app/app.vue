<template>
  <u-app>
    <div class="particles-container">
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
    <div class="main-conte">
      <nuxt-page/>
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

<script setup lang="ts">
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