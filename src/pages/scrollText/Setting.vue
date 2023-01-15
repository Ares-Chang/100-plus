<script setup lang="ts">
const { show } = defineProps<{
  text: string
  show: boolean
  config: {
    color: string
  }
}>()
const emit = defineEmits(['update:text', 'update:show', 'update:config'])

const colorList = [
  'white',
  'black',
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'sky',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
  'gray',
  'slate',
]
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
      <div flex gap-2 overflow-auto>
        <div
          v-for="(item, index) in colorList" :key="index"
          w-8 h-8
          flex-shrink-0
          :style="`background: ${item}`"
          @click="emit('update:config', { ...config, color: item })"
        />
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
