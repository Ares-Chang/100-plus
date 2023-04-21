<script setup lang="ts">
const list = [
  {
    name: '123',
    age: 12,
  },
  {
    name: '456',
    age: 13,
  },
]
</script>

<template>
  <div>
    <div v-for="item in list" :key="item.name">
      <div>{{ item.name }}</div>
      <div>{{ item.age }}</div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  </route>
