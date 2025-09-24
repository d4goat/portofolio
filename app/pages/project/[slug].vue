<template>
    <UContainer class="min-h-dvh pt-24">
        <main class="space-y-5">
            <div class="flex gap-4 items-center">
                <UButton label="Back" icon="i-lucide-arrow-left" variant="subtle" />
                <UBreadcrumb :ui="{ linkLabel: 'text-lg', list: 'text-xl' }" :items="breadcrumbItem" />
            </div>
        </main>
    </UContainer>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui';

const route = useRoute()
const breadcrumbItem = ref<BreadcrumbItem[]>([
    {
        label: 'Projects',
        to: '/'
    },
    {
        label: route.params.slug as string
    }
])

console.log(route.params.slug)
</script>