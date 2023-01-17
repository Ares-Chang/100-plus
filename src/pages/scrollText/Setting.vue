<script setup lang="ts">
import { ColorList } from '@/composables/color'
import type { ConfigProps } from '@/types/ScrollText'

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
        字体颜色
      </p>
      <div flex="~ wrap" gap-2>
        <div
          v-for="(item, index) in ColorList" :key="index"
          w-8 h-8
          flex-shrink-0
          :class="`bg-${item}`"
          @click="emit('update:config', { ...config, color: item })"
        />
      </div>
      <p my-2>
        速度
      </p>
      <div flex gap-2 text-center overflow-auto>
        <div
          v-for="item in Array.from({ length: 20 }, (_, index) => 0.5 * (index + 1))" :key="item"
          w-8 h-8
          flex-shrink-0
          @click="emit('update:config', { ...config, speed: `${item}s` })"
        >
          {{ item }}
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
