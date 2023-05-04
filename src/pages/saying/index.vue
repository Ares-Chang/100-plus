<script setup lang="ts">
interface Saying {
  text: string
  author: string
}

const obj = ref<Saying>({
  text: '',
  author: '',
})

async function getDataList() {
  const { data: list } = await useFetch('/api/saying.json').json()
  const index = useRandomInt(0, list.value.length - 1)
  obj.value = list.value[index]
}

getDataList()
</script>

<template>
  <div h-100vh flex justify-center items-center>
    <div max-w-1200px w-50vw text-2xl font-bold>
      <div>{{ obj.text }}</div>
      <div text-right mt-2>
        <span>——</span>
        <span ml-3>{{ obj.author }}</span>
      </div>
    </div>
  </div>
</template>
