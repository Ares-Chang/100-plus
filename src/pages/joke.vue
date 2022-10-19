<script setup lang="ts">
useSetTitle('Joke')

interface JokeInfo {
  content: string
  updateTime: string
}
const message = useMessage()
const dataList = $ref<JokeInfo[]>([])

/**
 * 随机获取笑话段子列表
 */
async function getDataList() {
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
  }
  catch (error) {
    message.error('啊哦 ~ 数据好像走丢了')
  }
}

let isSkeleton = $ref(true) // 是否显示骨架屏
getDataList().then(() =>
  // 接口不支持短时间连续访问，QPS 1s
  setTimeout(() => {
    getDataList()
    isSkeleton = false
  }, 1000),
)
</script>

<template>
  <n-grid x-gap="14" y-gap="14" :cols="4">
    <n-gi v-for="(item, index) in isSkeleton ? Array(20).fill({}) : dataList" :key="index" min-h-40>
      <n-card h-full embedded hoverable>
        <template v-if="isSkeleton">
          <n-skeleton text :repeat="useRandomInt(2, 5)" />
          <n-skeleton text :style="`width: ${useRandomInt(2, 8)}0%`" />
        </template>
        <span v-else>{{ item.content }}</span>
      </n-card>
    </n-gi>
  </n-grid>
</template>
