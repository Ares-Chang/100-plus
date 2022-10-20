<script setup lang="ts">
useSetTitle('Clock 1')

let hours = $ref('')
let minutes = $ref('')
let seconds = $ref('')

watchEffect(() => {
  [hours, minutes, seconds] = useDateFormat(useNow(), 'HH:mm:ss').value.split(':')
})

const { toggle } = useFullscreen()
</script>

<template>
  <div
    h-100vh select-none
    flex justify-center items-center
    @click="toggle"
  >
    <n-progress w="80!" type="circle" status="error" :percentage="+hours / 60 * 100">
      <div text-center>
        <p text-2xl font-bold>
          {{ hours }}
        </p>
        <p>HOURS</p>
      </div>
    </n-progress>
    <n-progress w="80!" type="circle" status="warning" :percentage="+minutes / 60 * 100">
      <div text-center>
        <p text-2xl font-bold>
          {{ minutes }}
        </p>
        <p>MINUTES</p>
      </div>
    </n-progress>
    <n-progress w="80!" type="circle" status="success" :percentage="+seconds / 60 * 100">
      <div text-center>
        <p text-2xl font-bold>
          {{ seconds }}
        </p>
        <p>SECONDS</p>
      </div>
    </n-progress>
  </div>
</template>

<route lang="yaml">
meta:
  layout: spa
</route>

