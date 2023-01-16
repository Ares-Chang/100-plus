<script setup lang="ts">
import Setting from './Setting.vue'
import type { ConfigProps } from '@/types/ScrollText'

const text = ref('点击这里输入要显示文字哦~')
const show = ref(false)
const config = ref<ConfigProps>({
  color: 'while',
})
</script>

<template>
  <div
    bg-black w-100vw h-100vh
    flex justify-center items-center
    overflow-hidden
    @click="show = true"
  >
    <div :class="`LoopText color-${config.color}`">
      {{ text }}
    </div>
    <Setting
      v-model:text="text"
      v-model:show="show"
      v-model:config="config"
    />
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
    transform: rotate(90deg) translateX(100%);
  }
  100% {
    transform: rotate(90deg) translateX(-100%);
  }
}
</style>
