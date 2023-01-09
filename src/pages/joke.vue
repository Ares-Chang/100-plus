<script setup lang="ts">
useSetTitle('Joke')

interface JokeInfo {
  content: string
  updateTime: string
}
const message = useMessage()
const active = $ref(0) // 当前 key 下标
const dataList = $ref<JokeInfo[]>([])
let isSkeleton = $ref(true) // 是否显示骨架屏

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
    setTimeout(() => isSkeleton = false, 800)
  }
  catch (error) {
    message.error('啊哦 ~ 数据好像走丢了')
  }
}

getDataList()
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
          <n-button text text-24px="!" @click="active > 0 && active--">
            <i i-carbon-chevron-left />
          </n-button>
          <n-button
            text
            text-24px="!"
            @click="
              active++;
              active >= dataList.length - 1 && getDataList()"
          >
            <i i-carbon-chevron-right />
          </n-button>
        </div>
      </template>
    </n-card>
  </div>
</template>
