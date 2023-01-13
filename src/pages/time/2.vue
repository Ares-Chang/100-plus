<script setup lang="ts">
const dataList = $ref<{
  label: string
  status: 'success' | 'error' | 'warning' | 'info' | 'default'
  value: string
}[]>([
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
let meridiem = $ref('') // AM/PM

watchEffect(() => {
  const [_meridiem, ...data] = useDateFormat(useNow(), 'A:HH:mm:ss').value.split(':')
  meridiem = _meridiem
  dataList.forEach((item, index) => {
    item.value = data[index]
  })
})
</script>

<template>
  <div
    min-h-100vh select-none
    flex justify-center items-center
    @click="toggleFullScreen"
  >
    <div flex="~ wrap" justify-center gap-14>
      <n-progress
        v-for="(item, index) in dataList" :key="index"
        w="80!" type="circle"
        :status="item.status"
        :percentage="+item.value / 60 * 100"
      >
        <div text-center text-4xl>
          <p text-8xl font-bold>
            {{ item.value }}
          </p>
          <p>{{ item.label }}</p>
        </div>
      </n-progress>
      <div text-5xl>
        <n-gradient-text font="bold!" :type="meridiem === 'AM' ? 'warning' : 'error'">
          {{ meridiem }}
        </n-gradient-text>
      </div>
    </div>
  </div>
</template>
