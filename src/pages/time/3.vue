<script setup lang="ts">
let list: string[] = $ref([])

watchEffect(() => list = useDateFormat(useNow(), 'HH:mm:ss').value.split(':'))
</script>

<template>
  <div

    h-100vh w-100vw flex select-none items-center justify-center gap-6 bg-black
    class="font-style"
  >
    <template
      v-for="(item, index) in list" :key="index"
    >
      <div
        bg="#0f0f0f"
        rd-4 px-10 text-center text-15rem
      >
        {{ item }}
      </div>
      <span v-if="index !== 2" text-13rem>:</span>
    </template>
  </div>
</template>

<style scoped>
.font-style {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '\5fae\8f6f\96c5\9ed1', Arial, sans-serif;
}
</style>
