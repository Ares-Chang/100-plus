<script setup lang="ts">
useSetTitle('Time')

let date = $ref('')
let week = $ref('')
let time = $ref('')

watchEffect(() => {
  [date, week, time] = useDateFormat(useNow(), 'MM-DD ddd HH:mm ss').value.split(' ')
})

const { toggle } = useFullscreen()
</script>

<template>
  <div class="box" select-none @click="toggle">
    <div flex justify-center gap-10 z-1>
      <a href="https://github.com/Ares-Chang/calendar-clock" target="_blank" @click.stop>
        <span class="GitHub">GitHub</span>
      </a>
      <Logo />
    </div>
    <div text-size-28vh>
      {{ date }} {{ week }}
    </div>
    <div text-size-56vh>
      {{ time }}
    </div>
  </div>
</template>

<style>
.box {
  line-height: 1;
  font-family:"Microsoft YaHei",微软雅黑;
  color: #e2ecfd;
  background-color: #0d1320;
  flex-flow: column;
  @apply h-100vh overflow-hidden font-bold text-center flex justify-center;
}
.box span {
  line-height: 1;
  @apply text-size-7vh font-bold
}
</style>

<route lang="yaml">
meta:
  layout: spa
</route>
