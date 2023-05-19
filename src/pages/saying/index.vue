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
  const { data: list } = await useFetch('/api/saying.json').json()
  const index = useRandomInt(0, list.value.length - 1)
  obj.value = list.value[index]
}

getDataList()
</script>

<template>
  <div
    h-100vh
    flex justify-center items-center
    @click="toggleFullScreen"
  >
    <div max-w-1200px w-50vw text-2xl font-bold>
      <div>{{ obj.text }}</div>
      <div v-if="obj.source || obj.author" flex justify-end gap-2 mt-2>
        <span>——</span>
        <span v-if="obj.source">「{{ obj.source }}」</span>
        <span v-if="obj.author">{{ obj.author }}</span>
      </div>
    </div>
  </div>
</template>
