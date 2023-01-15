<script setup lang="ts">
const { show } = defineProps<{
  show: boolean
}>()
const emit = defineEmits(['update:show'])
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
    <n-drawer-content title="斯通纳" closable>
      《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
    </n-drawer-content>
  </n-drawer>
</template>
