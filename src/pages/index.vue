<script setup lang="ts">
import { addDays } from 'date-fns/esm'
const value = ref(addDays(Date.now(), 1).valueOf())
</script>

<template>
  <n-layout
    h-100vh
    content-style="display: flex; flex-flow: column;"
  >
    <n-layout-header
      bordered
    >
      <NavBar />
    </n-layout-header>
    <n-layout :native-scrollbar="false">
      <n-layout-content p-8>
        <div flex justify-center items-center>
          <NCalendar
            v-model:value="value"
            w80vw h="90vh!"
            #="{ year, month, date }"
          >
            {{ year }}-{{ month }}-{{ date }}
          </NCalendar>
        </div>
      </n-layout-content>
      <n-layout-footer bordered>
        <Footer />
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>
