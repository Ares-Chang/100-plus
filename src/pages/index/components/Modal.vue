<script setup lang="ts">
interface Days {
  avoid: string
  chineseZodiac: string
  constellation: string
  date: string
  dayOfYear: number
  indexWorkDayOfMonth?: number
  lunarCalendar: string
  solarTerms: string
  suit: string
  type?: number
  typeDes: string
  weekDay: number
  weekOfYear: number
  yearTips?: string
}

const { show, data } = defineProps<{
  show: boolean
  data: Days
}>()
const emit = defineEmits(['update:show'])

console.log(data)

const date = $ref(data.date)
const showModal = ref(show)

const KEYLIST = [
  {
    label: '星座',
    key: 'constellation',
  },
  {
    label: '节气',
    key: 'solarTerms',
  },
  {
    label: '节假日',
    key: 'typeDes',
  },
  {
    label: '周天数',
    key: 'weekDay',
    tips: '本周第几天',
  },
  {
    label: '年天数',
    key: 'dayOfYear',
    tips: '本年第几天',
  },
  {
    label: '年周数',
    key: 'weekOfYear',
    tips: '本年第几周',
  },
]
</script>

<template>
  <n-modal
    :show="showModal"
    w="!600px"
    preset="card"
    :title="date"
    size="huge"
    :bordered="false"
    @update-show="e => emit('update:show', e)"
  >
    <n-list>
      <n-list-item v-for="(item, index) in KEYLIST" :key="index">
        <n-grid x-gap="12" :cols="4">
          <n-gi> {{ item.label }} </n-gi>
          <n-gi span="2">
            {{ item.key === 'typeDes' ? '今天是' : ''
            }}{{ (data as any)[item.key] }}
          </n-gi>
          <n-gi v-if="item.tips" color="gray/80" flex items-center>
            <i icon-btn text-sm i-carbon:ai-status-in-progress mr-1 />
            {{ item.tips }}
          </n-gi>
        </n-grid>
      </n-list-item>
    </n-list>
  </n-modal>
</template>
