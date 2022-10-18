<template>
  <n-layout h-100vh content-style="display: flex; flex-flow: column;">
    <n-layout-header bordered>
      <NavBar />
    </n-layout-header>
    <n-layout :native-scrollbar="false">
      <n-layout-content p-8 min-h-79vh>
        <slot />
      </n-layout-content>
      <n-layout-footer bordered>
        <Footer />
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>
