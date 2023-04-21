<script setup lang="ts">
import Calendar from './components/Calendar.vue'

useSetTitle('Calendar')
</script>

<template>
  <div flex justify-center items-center>
    <Calendar />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
