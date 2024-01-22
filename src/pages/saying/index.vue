<script setup lang="ts">
interface Saying {
  text: string
  source: string
  author: string
  explain: string
}

const obj = ref<Saying>({
  text: '',
  source: '',
  author: '',
  explain: '',
})

async function getDataList() {
  const { data } = await useFetch('https://api.aword.areschang.top/').json()
  obj.value = data.value
}

getDataList()
</script>

<template>
  <div

    h-100vh flex items-center justify-center
    @click="toggleFullScreen"
  >
    <div max-w-1200px w-50vw text-2xl font-bold>
      <div>{{ obj.text }}</div>
      <div v-if="obj.source || obj.author" mt-2 flex justify-end gap-2>
        <span>——</span>
        <span v-if="obj.source">「{{ obj.source }}」</span>
        <span v-if="obj.author">{{ obj.author }}</span>
      </div>
    </div>
  </div>
</template>
