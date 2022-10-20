<script setup lang="ts">
useSetTitle('Clock')
</script>

<template>
  <iframe w-100vw h-100vh src="/time/1" frameborder="0" />
</template>

<route lang="yaml">
meta:
  layout: spa
</route>
