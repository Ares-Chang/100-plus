<script setup lang="ts">
import { addDays } from 'date-fns/esm'
const value = ref(addDays(Date.now(), 1).valueOf())
</script>

<template>
  <div p="x-4 y-10">
    <div>
      <NCalendar
        v-model:value="value"
        #="{ year, month, date }"
      >
        {{ year }}-{{ month }}-{{ date }}
      </NCalendar>
    </div>
    <Footer />
  </div>
</template>
