<template>
  <nav text-xl text-center>
    <a
      mx-2
      icon-btn i-carbon:time
      href="/time"
      title="Time"
    />

    <button mx-2 icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>

    <a
      mx-2
      icon-btn i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/Ares-Chang/calendar-clock"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
