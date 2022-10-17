<script setup lang="ts">
import type { Days } from '@/types/Calendar'
const { show, data } = defineProps<{
  show: boolean
  data: Days
}>()
const emit = defineEmits(['update:show'])

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
    <template #header>
      <p>{{ data.date }}</p>
      <p>{{ data.yearTips }}({{ data.chineseZodiac }})年 {{ data.lunarCalendar }} 星期{{ useDateFormat(data.date, 'dd').value }}</p>
    </template>
    <div mb-4>
      <span color-white bg-green-7 p="x-2 y-1" mr-5>宜</span>
      <span color="green-6">{{ data.suit }}</span>
    </div>
    <div mb-4>
      <span color-white bg-red-7 p="x-2 y-1" mr-5>忌</span>
      <span color-red-5>{{ data.avoid }}</span>
    </div>
    <n-list>
      <n-list-item v-for="(item, index) in KEYLIST" :key="index">
        <n-grid x-gap="12" :cols="4">
          <n-gi> {{ item.label }} </n-gi>
          <n-gi span="2">
            {{ item.key === 'typeDes' ? '今天是' : ''
            }}{{ data[item.key] }}
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
