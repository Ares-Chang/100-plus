export default defineComponent({
  setup() {
    let time = $ref(0)
    let timer: ReturnType<typeof setInterval> | null = null

    function handleBtn() {
      if (!timer) {
        time = 0
        /**
         * FIXME: This should 1ms timeout trigger one add, but it doesn't
         * @see reference {@link https://stackoverflow.com/questions/40752982/setinterval-at-1ms-doesnt-seem-to-actually-be-1ms}
         * @see cause {@link https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage}
         */
        timer = setInterval(() => time++, 1)
      }
      else {
        clearInterval(timer)
        timer = null
      }
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
            { timer ? '停止' : '开始' }
          </div>
        </div>
      </div>
    )
  },
})
