<script setup lang="ts">
const text = ref('我是一段很长很长的文字，你看我长不长')
</script>

<template>
  <div bg-black w-100vw h-100vh flex justify-center items-center overflow-hidden>
    <div class="LoopText">
      {{ text }}
    </div>
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
