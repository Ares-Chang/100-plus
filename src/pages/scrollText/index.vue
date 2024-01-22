<script setup lang="ts">
import Setting from './Setting.vue'
import type { ConfigProps } from '@/types/ScrollText'

const text = ref('点击这里输入要显示文字哦~')
const show = ref(false)
const config = ref<ConfigProps>({
  color: 'white',
  speed: '4s',
})
useStorage('scroll-text-config', config) // 持久化存储
</script>

<template>
  <div

    h-100vh w-100vw flex items-center justify-center overflow-hidden bg-black
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
  animation: v-bind(config.speed) LoopText linear infinite normal;
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
