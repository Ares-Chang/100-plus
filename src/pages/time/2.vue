<script setup lang="ts">
interface DataItem {
  label: string
  status: 'success' | 'error' | 'warning' | 'info' | 'default'
  value: string
  color: string
}

const dataList = ref<DataItem[]>([
  {
    label: 'HOURS',
    status: 'error',
    value: '',
    color: '#e88080',
  },
  {
    label: 'MINUTES',
    status: 'warning',
    value: '',
    color: '#f2c97d',
  },
  {
    label: 'SECONDS',
    status: 'success',
    value: '',
    color: '#63e2b7',
  },
])
const meridiem = ref('') // AM/PM

watchEffect(() => {
  const [_meridiem, ...data] = useDateFormat(useNow(), 'A:HH:mm:ss').value.split(':')
  meridiem.value = _meridiem
  dataList.value.forEach((item: DataItem, index: number) => {
    item.value = data[index]
  })
})
</script>

<template>
  <div
    min-h-100vh flex select-none items-center justify-center
    @click="toggleFullScreen"
  >
    <div flex="~ wrap" justify-center gap-14>
      <Circle
        v-for="(item, index) in dataList" :key="index"
        :width="320" :percentage="+item.value / 60 * 100"
        :color="item.color"
      >
        <div text-center text-4xl>
          <p text-8xl font-bold>
            {{ item.value }}
          </p>
          <p>{{ item.label }}</p>
        </div>
      </Circle>
      <div text-5xl>
        <div
          w-fit bg-gradient-to-rt bg-clip-text text-transparent font-bold op-90
          :class="meridiem === 'AM' ? 'from-amber-500 to-amber' : 'from-rose-500 to-rose'"
        >
          {{ meridiem }}
        </div>
      </div>
    </div>
  </div>
</template>
