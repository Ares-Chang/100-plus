export default defineComponent({
  setup() {
    const base = 10000 // 最佳 10s 对比基数
    let best = $(useStorage('100s', 0)) // 存储最佳成绩
    let time = $ref(0)
    let start = $ref(0)
    const now = $(useNow())
    const btnText = $computed(() => {
      return start ? '停止' : time ? '复位' : '开始'
    })

    /**
     * 核心块逻辑：
     * 通过时间戳更新来规则定时器最小延迟问题
     * 时间戳更新，判断是记录有开始时间，如有进行计算绝对值差值
     */
    watch(() => now, () => {
      if (!start)
        return
      time = Math.abs(start - now.getTime())
    })

    function handleBtn() {
      if (!start) {
        if (time)
          return time = 0
        start = now.getTime()
      }
      else {
        start = 0
        if (Math.abs(time - base) <= Math.abs(best - base))
          best = time
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
            onClick={() => toggleDark()}>
            <div dark:i-carbon-moon i-carbon-sun text-xl />
          </button>
        </div>
        <div flex="~ col" justify-center items-center>
          <div text-6xl style="letter-spacing: 8px">{ getFormattingTime(time) }</div>
          <div my-24 text-center>
            <div>不是哥吹，一把就过！</div>
            <div>最佳成绩 <span color-orange>{ getFormattingTime(best) }</span></div>
          </div>
          <div
            p-13 rd="50%"
            bg="dark:white black"
            color="dark:black white"
            onClick={handleBtn}>
            { btnText }
          </div>
        </div>
      </div>
    )
  },
})
