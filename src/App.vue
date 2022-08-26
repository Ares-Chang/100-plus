<script setup lang="ts">
import { darkTheme } from 'naive-ui'
const theme = computed(() => (isDark.value ? darkTheme : null))
</script>

<template>
  <n-config-provider :theme="theme">
    <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
      <router-view />
      <Footer />
    </main>
    <n-global-style />
  </n-config-provider>
</template>
