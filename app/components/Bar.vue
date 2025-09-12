<template>
  <motion.div
     :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }"
      :transition="{
        duration: 0.8,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      }"
  >
    <Dock
    :items="items"
    :panel-height="58"
    :base-item-size="40"
    :magnification="50"
    :distance="150"
    :dock-height="150"
    :spring="{ mass: 0.1, stiffness: 150, damping: 12 }"
    />
  </motion.div>
</template>

<script lang="ts" setup>
import { AnimatePresence, motion } from 'motion-v';
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