<template>
  <span class="inline-block">
    {{ displayText }}
    <span class="animate-pulse">|</span>
  </span>
</template>

<script lang="ts" setup>
const displayText = ref<string>("")
const props = defineProps<{
  text: string
}>()

onMounted(() => {
  let index = 0;
  const timer = setInterval(() => {
    if(index <= props.text.length){
      displayText.value = props.text.slice(0, index);
      index++;
    } else {
      clearInterval(timer)
    }
  }, 200)
  return () => clearInterval(timer)
})
</script>

<style scoped>
span {
  font-family: Titillium Web;
}
</style>