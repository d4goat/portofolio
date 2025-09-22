<template>
  <div class="grid grid-cols-7 gap-3">
    <div class="group bg-neutral-800/60 hover:bg-neutral-800 p-4 transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center justify-center" v-for="(item, index) in techStackItem" :key="index">
      <div class="relative">
      <component class="relative text-[5em] transform transition-transform duration-300" :is="item.icon" />
    </div>
    <span class="font-semibold text-lg"> {{ item.label }} </span>
  </div>
</div>
</template>

<script lang="ts" setup>
import htmlIcon from '~/assets/images/html-5-svgrepo-com.svg';
import cssIcon from '~/assets/images/css-3-svgrepo-com.svg';
import jsIcon from '~/assets/images/js-official-svgrepo-com.svg';
import tailwindIcon from '~/assets/images/tailwind-svgrepo-com.svg';
import bootstrapIcon from '~/assets/images/bootstrap-svgrepo-com.svg';
import viteIcon from '~/assets/images/vite.svg';
import vueIcon from '~/assets/images/vue-svgrepo-com.svg';
import phpIcon from '~/assets/images/php-svgrepo-com.svg';
import laravelIcon from '~/assets/images/laravel-svgrepo-com.svg';
import reactIcon from '~/assets/images/reactjs-svgrepo-com.svg';

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
    },
    {
        label: 'Vite',
        icon: viteIcon,
    },
    {
        label: 'Vue',
        icon: vueIcon,
    },
    {
        label: 'PHP',
        icon: phpIcon,
    },
    {
        label: 'Laravel',
        icon: laravelIcon,
    },
    {
        label: 'React Native',
        icon: reactIcon,
    },
]
</script>

<style>

</style>