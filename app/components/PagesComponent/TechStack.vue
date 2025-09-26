<template>
    <div 
    class="group cursor-pointer bg-neutral-800/60 hover:bg-neutral-800 p-3 md:p-4 rounded-lg
     transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center justify-center"
     >
      <div class="relative">
      <component :class="props.techClass ? props.techClass : ''" class="relative text-[5em] transform transition-transform duration-300" :is="props.techStackIcon" />
    </div>
    <span class="font-semibold text-lg"> {{ props.techLabel }} </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    techStackIcon: any;
    techLabel: string;
    techClass?: string;
}>()
</script>

<style>

</style>