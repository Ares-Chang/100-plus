export default defineComponent({
  setup() {
    const base = 10000 // 最佳 10s 对比基数
    const best = useStorage('100s', 0) // 存储最佳成绩
    const time = ref(0) // 存储当局时间
    const start = ref(0) // 存储点击开始时间
    const now = useNow() // 当前时间戳，用于驱动数据更新

    /**
     * 按钮显示文字
     */
    const btnText = computed(() =>
      start.value ? '停止' : time.value ? '复位' : '开始',
    )

    const tipList = [
      '不是哥吹，一把就过！',
      '你行不行呀，细狗~',
      '就差一点儿就成功了！',
      '你与成功的距离就差一点儿~',
      '我在这儿等着你成功~',
    ]

    /**
     * tip 显示文字
     */
    const tipText = computed((): string => {
      let text = tipList[useRandomInt(0, tipList.length - 1)]
      if (time.value === 10000)
        text = '喜提大奖，不买彩票可惜了~'
      return btnText.value === '复位' ? text : (tipText.value || text)
    })

    /**
     * 核心块逻辑：
     * 通过时间戳更新来规则定时器最小延迟问题
     * 时间戳更新，判断是记录有开始时间，如有进行计算绝对值差值
     */
    watch(now, () => {
      if (!start.value)
        return
      time.value = Math.abs(start.value - now.value.getTime())
    })

    function handleBtn() {
      if (!start.value) {
        if (time)
          return time.value = 0
        start.value = now.value.getTime()
      }
      else {
        start.value = 0
        if (Math.abs(time.value - base) <= Math.abs(best.value - base))
          best.value = time.value
      }
    }

    /**
     * 获取格式化显示时间
     * @param time 时间
     * @returns 格式化时间 { 10:000 }
     */
    function getFormattingTime(time: number) {
      return (time / 1000).toFixed(3).replace('.', ':')
    }

    return () => (
      <div h-100vh flex="~ col">
        <div text-right p-2 mb-2>
          <button
            p-2
            rd="50%"
            bg="dark:gray/40 gray/20"
            icon-btn
            onClick={toggleDark}
          >
            <div dark:i-carbon-moon i-carbon-sun text-xl />
          </button>
        </div>
        <div flex="~ col" justify-center items-center>
          <div text-6xl style="letter-spacing: 8px">{ getFormattingTime(time.value) }</div>
          <div my-24 text-center>
            <div>{ tipText }</div>
            <div>
              最佳成绩
              <span color-orange>{ getFormattingTime(best.value) }</span>
            </div>
          </div>
          <div
            p-13
            rd="50%"
            bg="dark:white black"
            color="dark:black white"
            onClick={handleBtn}
          >
            { btnText }
          </div>
        </div>
      </div>
    )
  },
})
