<script setup lang="ts">
const list = [
  {
    name: '扫雷',
    link: 'https://mines.areschang.top/',
  },
  {
    name: '时钟',
    link: 'https://time.areschang.top/time',
  },
  {
    name: '网易云音乐 API',
    link: 'http://api.music.areschang.top/',
  },
  {
    name: '木鱼',
    link: 'https://wfish.areschang.top/',
  },
  {
    name: '人生小格',
    link: 'https://life-grid.areschang.top/',
  },
  {
    name: 'CDN Vue Develop Repo',
    link: 'https://cdn-vue.areschang.top/',
  },
  {
    name: 'ChatGPT-Next-Web',
    link: 'https://chat.areschang.top/',
  },
  {
    name: 'H5 打开微信小程序',
    link: 'https://open-applet.areschang.top/',
  },
  {
    name: '挑战 100 秒',
    link: 'https://100.areschang.top/100s',
  },
  {
    name: '滚动文字',
    link: 'https://100.areschang.top/scrollText',
  },
  {
    name: '笑话段子',
    link: 'https://100.areschang.top/joke',
  },
  {
    name: '日历',
    link: 'https://100.areschang.top/calendar',
  },
]
</script>

<template>
  <div flex="~ wrap" gap-6>
    <a
      v-for="item in list" :key="item.name"
      :href="item.link" target="_blank"
      w-80 h-60 p-3 bg-gray-600
      shadow="~ pink"
      transition-all-400
      hover="translate-y--2 shadow-xl"
    >
      <div text-center font-bold>
        {{ item.name }}
      </div>
    </a>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
