<template>
  <AnimatePresence mode="wait">
    <WelcomeScreen
      v-if="showWelcome.welcome"
      @loading-complete="handleLoadingComplete"
    />
  </AnimatePresence>
  <div v-if="!showWelcome.welcome">
    <UContainer class="min-h-dvh overflow-hidden">
      <div
        :class="[
          'relative transition-all duration-1000',
          isLoaded ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <div 
          id="home"

        class="container space-y-40 mx-auto pt-36">
          <div
            class="flex flex-col lg:flex-row-reverse items-center justify-center md:justify-between gap-0 sm:gap-12 lg:gap-20">
            <Lottie
              width="70%"
              height="70%"
              class="grayscale hover:scale-105 hover:rotate-2 transition-transform duration-300"
              name="Technology"
            />
            <div
              class="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
            >
              <div class="space-y-6 sm:space-y-6">
                <div data-aos="fade-right" data-aos-delay="400" class="">
                  <h1 class="text-8xl font-bold relative">
                    <ShinyText text="Hello," :speed="3" class="font-titilium" />
                    <br />
                    <ShinyText
                      text="I'm Yusuf!"
                      :disabled="false"
                      :speed="3"
                      class="font-titilium"
                    />
                  </h1>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="600"
                  class="relative inline-block"
                >
                  <span
                    className="absolute -inset-2 bg-white blur-2xl opacity-20"
                  ></span>
                  <TextType
                    :text="['Frontend Developer', 'Backend Developer']"
                    :typingSpeed="75"
                    :pauseDuration="1500"
                    :showCursor="true"
                    cursorCharacter="|"
                    class="text-5xl font-bold relative"
                  />
                </div>
                <div data-aos="fade-up"
                data-aos-delay="700">
                  <span class="text-2xl text-neutral-300">
                    Create a innovative website, Functional, and User-Friendly.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <AboutMe/>
        </div>
      </div>
    </UContainer>

    <Bar />
  </div>
</template>

<script lang="ts" setup>
import { AnimatePresence, motion } from "motion-v";
import { useSetWelcome } from "#imports";
const showWelcome = useSetWelcome()
const isLoaded = ref(false);



const handleLoadingComplete = () => {
  console.log("Loading completed!"); // Debug log
  showWelcome.setNotWelcome()
};

onMounted(() => {
  isLoaded.value = true;
});

onUnmounted(() => {
  isLoaded.value = false;
});
</script>
<style scoped>
h1 {
  font-family: Titillium Web;
}
span {
  font-family: Titillium Web;
}

div{
  font-family: Titillium Web;
}
</style>
