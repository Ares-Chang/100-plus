<template>
  <nav flex items-center text-center text-xl>
    <a
      i-carbon:face-wink-filled mx-2 icon-btn
      href="/joke"
      target="_blank"
      title="Joke"
    />

    <a
      i-carbon:time mx-2 icon-btn
      href="/time"
      target="_blank"
      title="Time"
    />

    <button mx-2 icon-btn @click="toggleDark">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>

    <a
      i-carbon-logo-github mx-2 icon-btn
      rel="noreferrer"
      href="https://github.com/Ares-Chang/100-plus"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
