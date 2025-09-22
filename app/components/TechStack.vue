<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const item = [
    {
        label: 'TechStack',
        description: 'TechStack that i use',
        icon: 'i-lucide-code',
        slot: 'techstack' as const
    },
    {
        label: 'Project',
        description: 'Project that i made',
        icon: 'i-lucide-square-chart-gantt',
        slot: 'project' as const
    },
] satisfies TabsItem
</script>

<template>
    <UTabs :items="item" variant="pill" :ui="{ trigger: 'grow' }" class="gap w-full" color="primary">
        <template #techstack>
            <PagesComponentTechStack/>
        </template>
        <template #project>

        </template>
    </UTabs>
</template>