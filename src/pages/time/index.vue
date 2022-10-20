<script setup lang="ts">
useSetTitle('Clock')
/**
 * show random clock project page
 */
const num = useRandomInt(1, 2)
</script>

<template>
  <iframe w-100vw h-100vh :src="`/time/${num}`" frameborder="0" />
</template>

<route lang="yaml">
meta:
  layout: spa
</route>
