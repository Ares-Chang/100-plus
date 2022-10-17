export interface YearList {
  year: number
  month: number
  days: Days[]
}

export interface Days {
  [key: string]: any
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
