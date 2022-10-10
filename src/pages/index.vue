<script setup lang="ts">
import { addDays } from 'date-fns/esm'
const value = ref(addDays(Date.now(), 1).valueOf())
</script>

<template>
  <div h100vh flex justify-center items-center>
    <NCalendar
      v-model:value="value"
      w80vw h="90vh!"
      #="{ year, month, date }"
    >
      {{ year }}-{{ month }}-{{ date }}
    </NCalendar>
    <Footer absolute top-4 right-4 />
  </div>
</template>
