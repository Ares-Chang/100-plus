export default defineComponent({
  setup() {
    let time = $ref(0)
    let start = $ref(0)
    const now = $(useNow())

    watch(() => now, () => {
      if (!start)
        return
      time = Math.abs(start - now.getTime())
    })

    function handleBtn() {
      if (!start)
        start = now.getTime()
      else
        start = 0
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
          <div text-6xl>{ (time / 1000).toFixed(3).replace('.', ':')}</div>
          <div my-24 text-center>
            <div>不是哥吹，一把就过！</div>
            <div>最佳成绩 <span color-orange>9:991</span></div>
          </div>
          <div
            p-13 rd="50%"
            bg="dark:white black"
            color="dark:black white"
            onClick={handleBtn}>
            { start ? '停止' : '开始' }
          </div>
        </div>
      </div>
    )
  },
})
