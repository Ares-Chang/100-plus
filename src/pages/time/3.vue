<script setup lang="ts">
let list: string[] = $ref([])

watchEffect(() => list = useDateFormat(useNow(), 'HH:mm:ss').value.split(':'))
</script>

<template>
  <div
    bg-black w-100vw h-100vh select-none
    flex justify-center items-center gap-6
    class="font-style"
  >
    <template
      v-for="(item, index) in list" :key="index"
    >
      <div
        bg="#0f0f0f" text-15rem
        text-center px-10 rd-4
      >
        {{ item }}
      </div>
      <span v-if="index !== 2" text-13rem>:</span>
    </template>
  </div>
</template>

<style scoped>
.font-style {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","\5fae\8f6f\96c5\9ed1",Arial,sans-serif;
}
</style>
