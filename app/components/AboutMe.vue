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
      </p>
    </div>
    <div class="flex gap-6">
      <u-card variant="subtle">
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
                <lucide-github :size="28" />
              </u-button>
              <u-button
                to="https://instagram.com/xstofmadd"
                target="_blank"
                variant="ghost"
                class="border border-gray-700 rounded-xl hover:bg-neutral-900 transition-colors duration-300"
              >
                <lucide-instagram :size="28" />
              </u-button>
            </div>
          </div>
        </template>

        <main>
          <p class="font-semibold text-gray-300">
            a student at UPN "Veteran" Jawa Timur university majoring in
            Information systems with an interest in Front-End development. But
            dont worry, i can handle back-end too. always reflecting on how each
            experience contributes to personal and team growth.
          </p>
        </main>
      </u-card>
      <img src="/images/pict2.jpg" class="rounded-xl grayscale object-contain w-[40%] h-[60%]" alt="">
    </div>
    <Placeholder />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
