<template>
    <div class="text-white">
        sssss
         <Dock
    :items="items"
    :panel-height="58"
    :base-item-size="40"
    :magnification="60"
    :distance="150"
    :dock-height="150"
    :spring="{ mass: 0.1, stiffness: 150, damping: 12 }"
  />
    </div>
</template>

<script setup lang="ts">
  import { h } from 'vue'

  const items = [
    { 
      icon: () => h('i', { class: 'pi pi-home', style: { fontSize: '15px', color: 'white' } }), 
      label: 'Home', 
      onClick: () => console.log('Home clicked!') 
    },
    { 
      icon: () => h('i', { class: 'pi pi-inbox', style: { fontSize: '15px', color: 'white' } }), 
      label: 'Archive', 
      onClick: () => console.log('Archive clicked!') 
    },
    { 
      icon: () => h('i', { class: 'pi pi-user', style: { fontSize: '15px', color: 'white' } }), 
      label: 'Profile', 
      onClick: () => console.log('Profile clicked!') 
    },
    { 
      icon: () => h('i', { class: 'pi pi-cog', style: { fontSize: '15px', color: 'white' } }), 
      label: 'Settings', 
      onClick: () => console.log('Settings clicked!') 
    },
  ];
</script>