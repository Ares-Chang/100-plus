<script setup lang="ts">
import generatedRoutes from 'virtual:generated-pages'

useSetTitle('Clock')

const list = generatedRoutes.filter(item => item.path.includes('time/'))
/**
 * show random clock project page
 */
const num = useRandomInt(0, list.length - 1)
</script>

<template>
  <iframe h-100vh w-100vw :src="list[num].path" frameborder="0" />
</template>
