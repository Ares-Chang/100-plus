<script setup lang="ts">
useSetTitle('Joke')

interface JokeInfo {
  content: string
  updateTime: string
}
const message = useMessage()
let dataList = $ref<JokeInfo[]>([])
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

    dataList = data
  }
  catch (error) {
    message.error('啊哦 ~ 数据好像走丢了')
  }
}

getDataList()
</script>

<template>
  <n-grid x-gap="14" y-gap="14" :cols="4">
    <n-gi v-for="(item, index) in dataList" :key="index">
      <n-card h-full>
        {{ item.content }}
      </n-card>
    </n-gi>
  </n-grid>
</template>
