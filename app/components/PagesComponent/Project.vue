<template>
  <u-card class="group relative">
    <div class="relative overflow-hidden rounded-lg">
      <img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" :src="data.img" :alt="data.title">
    </div>

    <div class="mt-4 space-y-3 flex flex-col items-start">
      <shiny-text :text="data.title" class="text-2xl font-bold" />
      <p class="text-gray-300 font-semibold leading-relaxed line-clamp-2">
        {{ data.description }}
      </p>

      <div class="w-full flex flex-row justify-between">
        <u-button v-if="data.isDeploy" variant="link" :to="data.link">
          <span class="text-lg font-semibold">Live Demo</span>
          <lucide-external-link/>
        </u-button>
        <u-button variant="subtle" label="Detail" trailing-icon="i-lucide-arrow-right" :to="data.link" />
      </div>
    </div>
  </u-card>
</template>

<script lang="ts" setup>
export interface propsType {
  img: string;
  title: string;
  description: string;
  link?: string;
  isDeploy: boolean
}
const props = defineProps<{
  data: propsType
}>()
</script>

<style>

</style>