<script setup lang="ts">
const { show } = defineProps<{
  text: string
  show: boolean
}>()
const emit = defineEmits(['update:text', 'update:show'])
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
    </n-drawer-content>
  </n-drawer>
</template>
