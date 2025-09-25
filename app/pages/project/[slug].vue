<template>
    <div class="min-h-dvh px-[3%] lg:px-[5%] pt-24">
        <main class="space-y-12">
            <div class="flex gap-4 items-center">
                <UButton label="Back" icon="i-lucide-arrow-left" variant="subtle" @click="welcome.setNotWelcome()"
                    to="/" size="xl"
                    :ui="{ label: 'text-xl font-semibold mr-1', leadingIcon: 'w-5 h-5', base: 'px-4' }" />
                <UBreadcrumb @click="welcome.setNotWelcome()" :ui="{ linkLabel: 'text-lg capitalize', list: 'text-xl' }"
                    :items="breadcrumbItem" />
            </div>

            <!-- content -->
            <div class="grid grid-cols-2 gap-14">
                <div class="space-y-10">
                    <div class="space-y-6">
                        <h1 data-aos="fade-right" data-aos-delay="300" class="text-6xl font-bold capitalize">
                            {{ route.params.slug }}
                        </h1>
                        <!-- <div class="h-2 w-[6em] animate-pulse bg-elevated rounded" /> -->
                        <USkeleton data-aos="fade" data-aos-delay="300" class="h-2 bg-neutral-600" />

                        <p data-aos="fade-right" data-aos-delay="400" class="leading-relaxed text-xl font-medium">
                            {{ data.desc }}
                        </p>

                        <div data-aos="fade-up"
                            data-aos-delay="450" class="bg-neutral-800/40 rounded-lg grid grid-cols-2 gap-5 p-4 mt-10">
                            <div
                            data-aos="fade-up-right"
                            data-aos-delay="450"
                                class="flex bg-neutral-800 border border-neutral-700 rounded-lg items-center gap-3 p-3 hover:scale-105 transform transition-transform duration-300">
                                <div class="p-2 bg-neutral-950 rounded-full">
                                    <LucideCode2 />
                                </div>
                                <div class="space-y-3">
                                    <span class="text-xl font-bold">
                                        {{ data.tech.length }}
                                    </span>
                                    <br>
                                    <span class="text-sm text-gray-400">
                                        Used Technology
                                    </span>
                                </div>
                            </div>
                            <div
                            data-aos="fade-up-left"
                            data-aos-delay="550"
                                class="flex bg-neutral-800 border border-neutral-700 rounded-lg items-center gap-3 p-3 hover:scale-105 transform transition-transform duration-300">
                                <div class="p-2 bg-neutral-950 rounded-full">
                                    <LucideLayers />
                                </div>
                                <div class="space-y-3">
                                    <span class="text-xl font-bold">
                                        {{ data.feature.length }}
                                    </span>
                                    <br>
                                    <span class="text-sm text-gray-400">
                                        Priority Feature
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="flex gap-5">
                        <SpotlightCard v-for="(item, index) in cardLink" :key="index"
                            spotlight-color="rgba(255, 255, 255, 0.25)"
                            data-aos="fade-up"
                            :data-aos-duration="index == 0 ? 800 : (800 + 100)"
                            class="bg-neutral-950 flex items-center gap-2 rounded-lg">
                            <UButton :icon="item.icon" :label="item.label" variant="ghost" size="xl" :to="item.link"
                                target="_blank" class="hover:bg-transparent"
                                :ui="{ label: 'text-xl font-semibold' }" />
                        </SpotlightCard>
                    </div>
                    <div class="space-y-6">
                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                        class="flex gap-4 items-center">
                            <LucideCode2/>
                            <h3 class="text-2xl font-semibold">Technologies Used</h3>
                        </div>
                        <div class="flex flex-wrap gap-4">
                            <SpotlightCard v-for="(item, index) in data.tech" :key="index"
                            spotlight-color="rgba(255, 255, 255, 0.25)"
                            :data-aos="index % 3 === 0 ? 'fade-up-right' : index % 3 === 1 ? 'fade-up' : 'fade-up-left'"
                    :data-aos-duration="index % 3 === 0 ? '1000' : index % 3 === 1 ? '1200' : '1000'"
                            class="bg-neutral-950 flex items-center gap-2 rounded-lg border-neutral-400">
                            <UButton :icon="item.icon" :label="item.label" variant="ghost" class="hover:bg-transparent"
                            :ui="{ label: 'text-lg font-semibold' }" />
                        </SpotlightCard>
                    </div>
                    </div>
                </div>
                <div class="space-y-8">
                    <div 
                        data-aos="fade-left"
                        data-aos-delay="300"
                    class="relative overflow-hidden  rounded-xl group h-fit">
                        <img :src="data.img" :alt="data.title"
                        class="bg-cover group-hover:scale-105 transform transition-transform duration-500">
                    </div>
                    <div class="bg-neutral-800/50 p-6 rounded-lg group relative border border-neutral-500 hover:border-neutral-300 
                    space-y-6 transition-colors duration-300 ease-out"
                    data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <div class="flex items-center gap-2">
                            <LucideStar class="text-yellow-500 group-hover:rotate-12 transition-transform duration-300"/>
                            <h1 class="text-xl font-semibold"> Key Features</h1>
                        </div>
                        <div class="space-y-2 mx-4">
                            <div class="flex items-center gap-3 hover:bg-neutral-600 border border-transparent hover:border-neutral-500 p-2 rounded-lg transition-colors duration-300"
                            v-for="(item, index) in data.feature" :key="index"
                            >
                            <div class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-neutral-500 group-hover:bg-neutral-300 transition-all duration-300" />
                            <span class="text-xl text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300"> {{ item }} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div class="py-10"></div>
    </div>
</template>

<script setup lang="ts">
import { useSetWelcome } from '#imports';
import type { BreadcrumbItem } from '@nuxt/ui';
import { projectData, type projectDataType } from '~/data/project-data';

const welcome = useSetWelcome()
const route = useRoute()
const data = reactive({} as projectDataType)

const toast = useToast()

const cardLink = [
    {
        label: "Live Demo",
        icon: "i-lucide-external-link",
        link: ""
    },
    {
        label: "Github",
        icon: "i-lucide-github",
        link: ""
    },
]

const breadcrumbItem = ref<BreadcrumbItem[]>([
    {
        label: 'Projects',
        to: '/'
    },
    {
        label: route.params.slug as string
    }
])

projectData.map(item => {
    if (item.title == route.params.slug) {
        Object.assign(data, item)
        if (cardLink[0]) {
            cardLink[0].link = data.deployLink || "";
        }
        if (cardLink[1]) {
            cardLink[1].link = data.github || "";
        }
        console.log(data)
    } else {
        toast.add({ title: 'Error', description: 'Data not found', duration: 5000 })
    }
})
console.log(route.params.slug)
</script>