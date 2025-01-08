<script setup lang="ts">
const date = ref('')
const week = ref('')
const time = ref('')

watchEffect(() => {
  [date.value, week.value, time.value] = useDateFormat(useNow(), 'MM-DD ddd HH:mm').value.split(' ')
})
</script>

<template>
  <div class="box" select-none @click="toggleFullScreen">
    <div z-1 flex justify-center gap-10>
      <a href="https://github.com/Ares-Chang/100-plus" target="_blank" @click.stop>
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
  font-family: 'Microsoft YaHei', 微软雅黑;
  color: #e2ecfd;
  background-color: #0d1320;
  flex-flow: column;
  @apply h-100vh overflow-hidden font-bold text-center flex justify-center;
}
.box span {
  line-height: 1;
  @apply text-size-7vh font-bold;
}
</style>
