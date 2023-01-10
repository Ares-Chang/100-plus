<script setup lang="ts">
useSetTitle('Joke')

interface JokeInfo {
  content: string
  updateTime: string
}
const message = useMessage()
let active = $ref(0) // 当前 key 下标
const dataList = $ref<JokeInfo[]>([])
let isSkeleton = $ref(true) // 是否显示骨架屏

/**
 * 随机获取笑话段子列表
 */
async function getDataList() {
  isSkeleton = true
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

    dataList.push(...data)
    setTimeout(() => isSkeleton = false, 800)
  }
  catch (error) {
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
    if (active <= 0)
      return message.warning('已经第一页了呦~')
    active--
  }
  else if (key === 'next') {
    active++
    if (isSkeleton)
      return message.warning('请稍等，数据加载中！')
    else if (active >= dataList.length - 1)
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
  <div h-hull flex justify-center items-center>
    <n-card w="50%!" h-60vh embedded hoverable>
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
          <n-button text text-24px="!" @click="handle('next')">
            <i i-carbon-chevron-right />
          </n-button>
        </div>
      </template>
    </n-card>
  </div>
</template>
