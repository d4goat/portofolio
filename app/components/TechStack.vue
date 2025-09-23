<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import htmlIcon from '~/assets/images/html-svgrepo-com.svg';
import cssIcon from '~/assets/images/css-svgrepo-com.svg';
import jsIcon from '~/assets/images/js-official-svgrepo-com.svg';
import tailwindIcon from '~/assets/images/tailwind-svgrepo-com.svg';
import bootstrapIcon from '~/assets/images/bootstrap-fill-svgrepo-com.svg';
import viteIcon from '~/assets/images/vitest.svg';
import vueIcon from '~/assets/images/vue.svg';
import phpIcon from '~/assets/images/php-svgrepo-com.svg';
import laravelIcon from '~/assets/images/laravel-svgrepo-com.svg';
import reactIcon from '~/assets/images/reactjs-svgrepo-com.svg';
import primeIcon from '~/assets/images/prime-svgrepo-com.svg';
import type { propsType } from './PagesComponent/Project.vue';

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

const techStackItem = [
    {
        label: 'HTML',
        icon: htmlIcon,
    },
    {
        label: 'CSS',
        icon: cssIcon,
    },
    {
        label: 'JavaScript',
        icon: jsIcon,
    },
    {
        label: 'Tailwind Css',
        icon: tailwindIcon,
    },
    {
        label: 'Bootstrap',
        icon: bootstrapIcon,
        class: 'text-purple-400'
    },
    // {
    //     label: 'Vite',
    //     icon: viteIcon,
    // },
    {
        label: 'Vue',
        icon: vueIcon,
    },
    {
        label: 'Primevue',
        icon: primeIcon
    },
    {
        label: 'PHP',
        icon: phpIcon,
    },
    {
        label: 'Laravel',
        icon: laravelIcon,
        class: 'text-orange-700'
    },
    // {
    //     label: 'Tanstack',
    //     icon: '~/assets/images/tanstack.png'
    // },
    {
        label: 'React Native',
        icon: reactIcon,
    },
]

const projectData: propsType[] = [
    {
        title: 'Go-Hijrah',
        description: 'Sebuah website yang menyediakan quran, hadits, bacaan sholat, doa harian, shalawat nabi dan waktu sholat secara online sehingga memudahkan pengguna untuk mengaksesnya',
        img: '/images/go-hijrah.png',
        isDeploy: true,
        link: 'https://go-hijrah.vercel.app'
    }
]
</script>

<template>
    <UTabs :items="item" variant="pill" :ui="{ trigger: 'grow cursor-pointer', label: 'text-xl font-semibold', content: 'mt-6' }" class="gap w-full"  size="xl" color="primary">
        <template #techstack>
            <div class="grid grid-cols-6 gap-5">
                <div v-for="(item, index) in techStackItem" :key="index"
                :data-aos="index % 3 === 0 ? 'fade-up-right' : index % 3 === 1 ? 'fade-up' : 'fade-up-left'"
                :data-aos-duration="index % 3 === 0 ? '1000' : index % 3 === 1 ? '1200' : '1000'"
            >
            <PagesComponentTechStack :techStackIcon="item.icon" :tech-label="item.label" :tech-class="item.class" />
        </div>
    </div>
        </template>
        <template #project>
            <div class="grid grid-cols-2 gap-4">
                <div v-for="(item, index) in projectData" :key="index"
                    :data-aos="index % 3 === 0 ? 'fade-up-right' : index % 3 === 1 ? 'fade-up' : 'fade-up-left'"
                    :data-aos-duration="index % 3 === 0 ? '1000' : index % 3 === 1 ? '1200' : '1000'"
                >
                    <PagesComponentProject :data="item" />
                </div>
            </div>
        </template>
    </UTabs>
</template>