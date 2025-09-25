<template>
  <div class="flex flex-col gap-20 items-center">
    <div class="space-y-3 text-center">
      <h2
        data-aos="zoom-in-up"
        data-aos-duration="600"
        class="text-4xl md:text-5xl font-bold"
      >
        About Me
      </h2>
      <p
        data-aos="zoom-in-up"
        data-aos-duration="800"
        class="text-base sm:text-lg flex items-center gap-2 font-semibold text-gray-300 max-w-2xl mx-auto"
      >
        <i class="pi pi-sparkles"></i>
        Transforming an ideas into digital experiences
        <i class="pi pi-sparkles"></i>
      </p>
    </div>
    <div class="flex md:flex-row flex-col-reverse gap-6">
      <u-card variant="subtle" data-aos="fade-right" data-aos-duration="800">
        <template #header>
          <div class="flex flex-row justify-between">
            <div class="space-x-3 flex">
              <p
                class="px-2 py-1 mt-1 border rounded-xl text-gray-400 w-fit h-fit"
              >
                <i class="pi pi-user"></i>
              </p>
              <p class="">
                <span class="font-semibold text-lg">
                  Achmadillah Yusuf Faqih F.
                </span>
                <br />
                <span class="text-gray-400"> FRONT-END DEVELOPER </span>
              </p>
            </div>
            <div class="flex flex-row gap-4">
              <u-button
                to="https://github.com/d4goat"
                target="_blank"
                variant="ghost"
                class="border border-gray-700 rounded-xl hover:bg-neutral-900 transition-colors duration-300"
              >
                <lucide-github class="text-white" :size="28" />
              </u-button>
              <UButton
                to="https://www.linkedin.com/in/achmadillah-yusuf-197220382/"
                target="_blank"
                variant="ghost"
                class="border border-gray-700 rounded-xl hover:bg-neutral-900 transition-colors duration-300"
              >
                <LucideLinkedin class="text-white" :size="28" />
              </UButton>
              <u-button
                to="https://instagram.com/xstofmadd"
                target="_blank"
                variant="ghost"
                class="border border-gray-700 rounded-xl hover:bg-neutral-900 transition-colors duration-300"
              >
                <lucide-instagram class="text-white" :size="28" />
              </u-button>
            </div>
          </div>
        </template>

        <main class="space-y-4">
          <p class="text-4xl font-bold">
            Passionate about technology and frontend development
          </p>
          <div class="space-y-4">
            <p class="font-semibold text-gray-400 leading-relaxed">
              A student at UPN "Veteran" Jawa Timur university majoring in
              Information systems with an interest in Front-End development. But
              don't worry, i can handle back-end too. always reflecting on how
              each experience contributes to personal and team growth.
            </p>

            <p class="text-gray-400 font-semibold">
              Wanna make an mobile app? don't worry i can do that
            </p>
          </div>
          <span class="text-xl font-semibold">Expertise</span>
          <div class="space-x-3 space-y-3 mt-3">
            <UBadge
              variant="subtle"
              color="primary"
              v-for="item in data"
              :key="item"
            >
              {{ item }}
            </UBadge>
          </div>

          <div class="grid grid-cols-3 gap-5">
            <div
              class="p-3 flex flex-col items-center text-center bg-neutral-800/40 shadow shadow-black space-y-3 rounded-lg
              cursor-pointer hover:scale-105 hover:-translate-y-3 hover:bg-neutral-800/80 transition-all duration-300"
              v-for="(item, index) in secData"
              :key="index"
            >
              <LucideBug :size="26" v-if="item.icon === 'LucideBug'" />
              <LucideUsers :size="26" v-else-if="item.icon === 'LucideUsers'" />
              <LucideBookOpen :size="26" v-else-if="item.icon === 'LucideBookOpen'" />
              <div class="space-y-1">
                <p class="font-semibold text-lg">{{ item.title }}</p>
                <p class="text-sm">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </main>
      </u-card>
      <img
        data-aos="fade-left"
        data-aos-duration="800"
        src="/images/pict2.jpg"
        class="rounded-xl grayscale object-contain w-[40%] h-[60%]"
        alt=""
      />
    </div>
    <Placeholder />
    <div class="space-y-4 text-center">
      <h1 class="text-5xl font-bold">
        Tech Stack & Projects
      </h1>
      <p class="text-lg font-semibold text-gray-300">
        Explore my journey through projects, and technical expertise. Each <br> section represents a milestone in my continuous learning path.
      </p>
    </div>
    <TechStack id="tech"/>
  </div>
</template>

<script lang="ts" setup>
const data = ref([
  "Vue",
  "Laravel",
  "Typescript",
  "Tailwindcss",
  "Bootstrap",
  "UI/UX",
  "Responsive Design",
  "Performance Optimization",
]);

const secData = ref([
  {
    title: "Problem Solving",
    desc: "Resolve complex technical issues.",
    icon: "LucideBug",
  },
  {
    title: "Team Collaboration",
    desc: "Work effectively in a team, and solving problems together.",
    icon: "LucideUsers",
  },
  {
    title: "Continous Learning",
    desc: "Stay updated with the latest trends and technologies in the field of frontend development.",
    icon: "LucideBookOpen",
  },
]);
</script>

<style scoped></style>
