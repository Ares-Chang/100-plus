<script setup lang="ts">
useSetTitle('Joke')

interface JokeInfo {
  content: string
  updateTime: string
}
const message = useMessage()
const active = ref(0) // 当前 key 下标
const dataList = ref<JokeInfo[]>([])
const isSkeleton = ref(true) // 是否显示骨架屏

/**
 * 随机获取笑话段子列表
 */
async function getDataList() {
  isSkeleton.value = true
  try {
    const {
      data: {
        value: { code, data },
      },
    } = await useFetch(
      `https://www.mxnzp.com/api/jokes/list/random?app_id=${
        import.meta.env.VITE_ROLL_APP_ID
      }&app_secret=${import.meta.env.VITE_ROLL_APP_SECRET}`,
    ).json()

    if (code !== 1)
      throw code

    dataList.value.push(...data)
    setTimeout(() => isSkeleton.value = false, 800)
  }
  catch (error) {
    console.error(error)
    message.error('啊哦 ~ 数据好像走丢了')
  }
}

getDataList()

/**
 * 触发翻页
 * @param key prev: 上一页; next: 下一页;
 */
function handle(key: string) {
  if (key === 'prev') {
    if (active.value <= 0)
      return message.warning('已经第一页了呦~')
    active.value--
  }
  else if (key === 'next') {
    active.value++
    if (isSkeleton.value)
      return message.warning('请稍等，数据加载中！')
    else if (active.value >= dataList.value.length - 1)
      getDataList()
  }
}

/**
 * 绑定键盘交互类型
 */
const KeyboardCodeList = new Map([
  ['Space', 'next'],
  ['ArrowUp', 'prev'],
  ['ArrowDown', 'next'],
  ['ArrowLeft', 'prev'],
  ['ArrowRight', 'next'],
  ['KeyA', 'prev'],
  ['KeyD', 'next'],
  ['KeyW', 'prev'],
  ['KeyS', 'next'],
])
/**
 * 绑定键盘事件
 */
document.addEventListener('keydown', ({ code }) => {
  const key = KeyboardCodeList.get(code)
  if (!key)
    return
  handle(key)
})
</script>

<template>
  <div h-hull flex items-center justify-center>
    <n-card w="50%!" hoverable embedded h-60vh>
      <template v-if="isSkeleton">
        <n-skeleton text :repeat="useRandomInt(2, 5)" />
        <n-skeleton text :style="`width: ${useRandomInt(2, 8)}0%`" />
      </template>
      <span v-else>{{ dataList[active]?.content }}</span>
      <template #action>
        <div flex justify-between>
          <n-button text text-24px="!" @click="handle('prev')">
            <i i-carbon-chevron-left />
          </n-button>
          <n-gradient-text type="warning">
            按下键盘左右键或
            <code
              color="#f1b85c" bg="#f1f1f1 dark:#3a3a3a"
              text="0.8rem" p="y-0.5 x-1.4" m-1 border-rd-1
            >click</code>
            进行翻页操作
          </n-gradient-text>
          <n-button text text-24px="!" @click="handle('next')">
            <i i-carbon-chevron-right />
          </n-button>
        </div>
      </template>
    </n-card>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
