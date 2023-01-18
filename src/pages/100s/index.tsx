export default defineComponent({
  setup() {
    return () => (
      <div h-100vh flex="~ col" justify-center items-center>
        <div text-6xl>0:000</div>
        <div my-24 text-center>
          <div>不是哥吹，一把就过！</div>
          <div>最佳成绩 <span color-orange>9:991</span></div>
        </div>
        <div p-13 rd="50%" bg-white color-black>开始</div>
      </div>
    )
  },
})
