<template>
  <AnimatePresence>
    <motion.div
      v-if="loading"
      class="fixed inset-0 bg-[#030014]"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }"
      :transition="{
        duration: 0.8,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      }"
    >
      <BackgroundEffect />

      <div class="relative min-h-screen flex items-center justify-center px-4">
        <div class="w-full max-w-4xl mx-auto">
          <motion.div
            class="flex justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12"
            :exit="{ y: -20, opacity: 0 }"
            :transition="{
              duration: 0.4,
              ease: 'easeInOut',
            }"
          >
            <div
              v-for="(item, index) in items"
              :key="index"
              class="relative group hover:scale-110 transition-transform duration-300"
              :data-aos="'fade-down'"
              :data-aos-delay="index * 200"
            >
              <div
                class="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300"
              />
              <div
                class="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full flex border border-white/10"
              >
                <i
                  :class="[
                    'sm:text-base md:text-lg lg:text-2xl text-white',
                    item.icon,
                  ]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            class="text-center mb-6 sm:mb-8 md:mb-12"
            :exit="{ y: -20, opacity: 0 }"
            :transition="{
              duration: 0.4,
              ease: 'easeInOut',
            }"
          >
            <h1
              class="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4"
            >
              <div class="mb-2 sm:mb-4">
                <span
                  data-aos="fade-right"
                  data-aos-delay="200"
                  class="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                >
                  Welcome
                </span>
                <span
                  data-aos="fade-right"
                  data-aos-delay="400"
                  class="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                >
                  To
                </span>
                <span
                  data-aos="fade-right"
                  data-aos-delay="600"
                  class="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                >
                  My
                </span>
              </div>
              <div>
                <span
                  data-aos="fade-up"
                  data-aos-delay="800"
                  class="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                >
                  Portfolio
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  class="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                >
                  Website
                </span>
              </div>
            </h1>
          </motion.div>

          <motion.div
            class="text-center"
            :exit="{ y: -20, opacity: 0 }"
            :transition="{
              duration: 0.4,
              ease: 'easeInOut',
            }"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <a
              href="https://www.suffaq.com"
              class="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full relative group hover:scale-105 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"
              />
              <div
                class="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl"
              >
                <Globe class="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                <span
                  class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                >
                  <TypewriterEffect text="www.suffaq.com" />
                </span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
</template>
<script setup lang="ts">
import { AnimatePresence, motion } from "motion-v";
const loading = ref<boolean>(true);

const props = defineProps<{
  onLoadingComplete: () => void;
}>();

const items = [
  { icon: "pi pi-code" },
  { icon: "pi pi-github" },
  { icon: "pi pi-user" },
];

onMounted(() => {
  const timer = setTimeout(() => {
    loading.value = false;
    setTimeout(() => {}, 1000);
  }, 4000);

  return () => clearTimeout(timer);
});
</script>
