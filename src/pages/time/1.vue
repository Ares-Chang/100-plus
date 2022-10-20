<script setup lang="ts">
useSetTitle('Clock 1')

const dataList = $ref([
  {
    label: 'HOURS',
    status: 'error',
    value: '',
  },
  {
    label: 'MINUTES',
    status: 'warning',
    value: '',
  },
  {
    label: 'SECONDS',
    status: 'success',
    value: '',
  },
])

watchEffect(() => {
  const data = useDateFormat(useNow(), 'HH:mm:ss').value.split(':')
  dataList.forEach((item, index) => {
    item.value = data[index]
  })
})

const { toggle } = useFullscreen()
</script>

<template>
  <div
    h-100vh select-none
    flex justify-center items-center
    @click="toggle"
  >
    <div flex gap-14>
      <n-progress
        v-for="(item, index) in dataList" :key="index"
        w="80!" type="circle"
        :status="item.status as any"
        :percentage="+item.value / 60 * 100"
      >
        <div text-center text-4xl>
          <p text-8xl font-bold>
            {{ item.value }}
          </p>
          <p>{{ item.label }}</p>
        </div>
      </n-progress>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: spa
</route>

