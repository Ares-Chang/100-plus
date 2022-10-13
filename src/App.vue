<script setup lang="ts">
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'

const theme = computed(() => (isDark.value ? darkTheme : null))
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
    <n-message-provider>
      <main font-sans text="gray-700 dark:gray-200">
        <router-view />
      </main>
    </n-message-provider>
    <n-global-style />
  </n-config-provider>
</template>
