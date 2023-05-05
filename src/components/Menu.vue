<template>
  <nav
    text-xl text-center
    flex items-center
  >
    <a
      mx-2
      icon-btn i-carbon:face-wink-filled
      href="/joke"
      target="_blank"
      title="Joke"
    />

    <a
      mx-2
      icon-btn i-carbon:time
      href="/time"
      target="_blank"
      title="Time"
    />

    <button mx-2 icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>

    <a
      mx-2
      icon-btn i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/Ares-Chang/100-plus"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
