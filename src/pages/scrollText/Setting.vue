<script setup lang="ts">
const { show } = defineProps<{
  text: string
  show: boolean
}>()
const emit = defineEmits(['update:text', 'update:show'])
let _show = $ref(show)

// 监听组件开启关闭
watchEffect(() => _show = show)
</script>

<template>
  <n-drawer
    v-model:show="_show"
    placement="bottom"
    @after-leave="emit('update:show', false)"
  >
    <n-drawer-content title="Setting" closable>
      <n-input
        :value="text" type="text"
        @input="emit('update:text', $event)"
      />
    </n-drawer-content>
  </n-drawer>
</template>
