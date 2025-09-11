<template>
      <Dock
    :items="items"
    :panel-height="58"
    :base-item-size="40"
    :magnification="50"
    :distance="150"
    :dock-height="150"
    :spring="{ mass: 0.1, stiffness: 150, damping: 12 }"
    />
</template>

<script lang="ts" setup>
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