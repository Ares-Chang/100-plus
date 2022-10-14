<script setup lang="ts">
import Calendar from './components/Calendar.vue'
document.title = 'Calendar | Ares Chang'
</script>

<template>
  <n-layout h-100vh content-style="display: flex; flex-flow: column;">
    <n-layout-header bordered>
      <NavBar />
    </n-layout-header>
    <n-layout :native-scrollbar="false">
      <n-layout-content p-8>
        <div flex justify-center items-center>
          <Calendar />
        </div>
      </n-layout-content>
      <n-layout-footer bordered>
        <Footer />
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>
