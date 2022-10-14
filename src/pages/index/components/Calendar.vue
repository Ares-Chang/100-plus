<script setup lang="ts">
import { addDays } from 'date-fns/esm'

const value = $ref(addDays(Date.now(), 1).valueOf())
const message = useMessage()

interface YearList {
  year: number
  month: number
  days: days[]
}

interface days {
  avoid: string
  chineseZodiac: string
  constellation: string
  date: string
  dayOfYear: number
  indexWorkDayOfMonth?: number
  lunarCalendar: string
  solarTerms: string
  suit: string
  type?: DateType
  typeDes: string
  weekDay: number
  weekOfYear: number
  yearTips?: string
}

enum DateType {
  '工作日',
  '假日',
  '节假日',
}

let dateList = $ref<YearList[]>([])
const pitchYear = $ref(+useDateFormat(value, 'YYYY').value)

watch(
  () => pitchYear,
  () => getDataList(pitchYear),
)

/**
 * 查询指定年份万年历
 * @param date The date to query YYYY
 */
async function getDataList(date: string | number) {
  try {
    const {
      data: {
        value: { code, data },
      },
    } = await useFetch(
      `https://www.mxnzp.com/api/holiday/list/year/${date}?gnoreHoliday=false&app_id=${
        import.meta.env.VITE_ROLL_APP_ID
      }&app_secret=${import.meta.env.VITE_ROLL_APP_SECRET}`,
    ).json()

    if (code !== 1)
      throw code

    dateList = data
  }
  catch (error) {
    message.error('万年历获取失败！')
  }
}

getDataList(pitchYear)

/**
 * 获取当前日期对应数据
 * @param month
 * @param date
 * @return {days} 返回当天数据体
 */
function getToday(month: number, date: number) {
  return dateList[month - 1]?.days[date - 1] || {}
}

interface DateInfo {
  year: number
  month: number
  date: number
}
function handleClick(_: number, info: DateInfo) {
  console.log(info)
}
</script>

<template>
  <NCalendar
    v-model:value="value"
    w80vw
    h="90vh!"
    #="{ month, date }"
    @panel-change="({ year }) => (pitchYear = year)"
    @update-value="handleClick"
  >
    <n-badge
      v-if="getToday(month, date).type === 2"
      value="休"
      :color="isDark ? 'green' : '#88c200'"
    />
    <n-badge
      v-else-if="
        getToday(month, date).type === 0
          && [6, 7].includes(getToday(month, date).weekDay)
      "
      value="班"
      :color="isDark ? '' : '#e65945'"
    />
    <p>{{ getToday(month, date).lunarCalendar }}</p>
    <p v-if="getToday(month, date).type === 2" color="#ff5957">
      {{ getToday(month, date).typeDes }}
    </p>
  </NCalendar>
</template>
