<script setup lang="ts">
import type { ConfigProps } from '@/types/ScrollText'
import { ColorList } from '@/composables/color'

const { show } = defineProps<{
  text: string
  show: boolean
  config: ConfigProps
}>()
const emit = defineEmits(['update:text', 'update:show', 'update:config'])
</script>

<template>
  <n-drawer
    :show="show"
    placement="bottom"
    @update:show="emit('update:show', false)"
  >
    <n-drawer-content title="Setting" closable>
      <p mb-2>
        显示内容
      </p>
      <n-input
        :value="text" type="text"
        @update:value="emit('update:text', $event)"
      />
      <p my-2>
        文字颜色
      </p>
      <div flex="~ wrap" gap-2>
        <div
          v-for="(item, index) in ColorList" :key="index"
          h-8 w-8 flex="~ shrink-0" items-center justify-center
          :class="`bg-${item}`"
          @click="emit('update:config', { ...config, color: item })"
        >
          <i
            v-if="config.color === item"
            i-carbon-checkmark-filled text-lg icon-btn
            :class="{
              'color-green': ['white', 'black'].includes(item),
            }"
          />
        </div>
      </div>
      <p my-2>
        动画速度
      </p>
      <div flex gap-2 overflow-auto text-center>
        <div
          v-for="item in Array.from({ length: 20 }, (_, index) => 0.5 * (index + 1))" :key="item"
          h-8 w-8 flex-shrink-0
          :class="{
            'color-green': config.speed === `${item}s`,
          }"
          @click="emit('update:config', { ...config, speed: `${item}s` })"
        >
          {{ item }}
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
