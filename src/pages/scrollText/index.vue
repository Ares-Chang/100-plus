<script setup lang="ts">
import Setting from './Setting.vue'
const text = ref('在这里输入要显示文字哦~')
const show = ref(false)
</script>

<template>
  <div
    bg-black w-100vw h-100vh
    flex justify-center items-center
    overflow-hidden
    @click="show = true"
  >
    <div class="LoopText">
      {{ text }}
    </div>
    <Setting v-model:text="text" v-model:show="show" />
  </div>
</template>

<style scoped>
.LoopText {
  @apply text-8xl;
  white-space: nowrap;
  animation: 4s LoopText linear infinite normal;
}
@keyframes LoopText {
  0% {
    transform: rotate(90deg) translateX(0px);
  }
  100% {
    transform: rotate(90deg) translateX(-100%);
  }
}
</style>
