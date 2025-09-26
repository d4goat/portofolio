<template>
  <u-card variant="subtle" class="group relative p-3">
      <div class="relative overflow-hidden rounded-lg">
        <img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" :src="data.img[0]" :alt="data.title">
    </div>

    <div class="mt-4 space-y-3 flex flex-col items-start">
      <shiny-text :text="data.title" class="text-2xl font-bold" />
      <p class="text-gray-300 font-semibold leading-relaxed line-clamp-2">
        {{ data.desc }}
      </p>

      <div class="w-full flex flex-row justify-between">
        <u-tooltip :text="!data.isDeploy ? `Sorry, this project isn't deployed` : ''">
          <u-button variant="subtle" :disabled="!data.isDeploy" :to="data.deployLink">
            <span class="text-lg font-semibold">Live Demo</span>
            <lucide-external-link/>
          </u-button>
        </u-tooltip>
          <u-button variant="subtle" label="Detail" trailing-icon="i-lucide-arrow-right" :to="data.detailLink"  />
      </div>
    </div>
  </u-card>
</template>

<script lang="ts" setup>
import type { projectDataType } from '~/data/project-data';

const props = defineProps<{
  data: projectDataType
}>()
</script>

<style>

</style>