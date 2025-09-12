<template>
  <AnimatePresence mode="wait">
    <WelcomeScreen v-if="showWelcome" @loading-complete="handleLoadingComplete" />
  </AnimatePresence>
    <div v-if="!showWelcome">
      <div class="min-h-screen overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]">
        <div :class="['relative z-10 transition-all duration-1000', isLoaded ? 'opacity-100' : 'opacity-0']">
          <div class="container mx-auto min-h-screen">
            <div class="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
              <div class="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0">
                <div class="space-y-4 sm:space-y-6">
                  <div data-aos="fade-right" data-aos-delay="400" class="">
                    <h1 class="text-8xl font-bold relative">
                      Hello, <br>
                      <ShinyText 
                        text="I'm Yusuf!"
                        :disabled="false" 
                        :speed="3" 
                        class="font-titilium"
                      />
                    </h1>
                  </div>
                  <div data-aos="fade-right" data-aos-delay="600" class="relative inline-block">
                    <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
                  <TextType
                    :text="['Frontend Developer', 'Backend Developer']"
                    :typingSpeed="75"
                    :pauseDuration="1500"
                    :showCursor="true"
                    cursorCharacter="|"
                    class="text-6xl font-bold relative"
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bar">
        <Bar />
      </div>
    </div>
</template>

<script lang="ts" setup>
import { AnimatePresence, motion } from 'motion-v';
const showWelcome = ref(true);
const isLoaded = ref(false);

const handleLoadingComplete = () => {
  console.log('Loading completed!'); // Debug log
  showWelcome.value = false;
};

onMounted(() => {
  isLoaded.value = true
})

onUnmounted(() => {
  isLoaded.value = false
})
</script>
<style scoped>
h1 {
  font-family: Titillium Web;
}
</style>