<template>
  <div grid h-screen w-screen place-items-center>
    <div class="card">
      炫彩边框卡片
    </div>
  </div>
</template>

<style scoped>
.card {
  /** 核心 */
  --border-width: 4px;
  position: relative;
  background: #000;
  border-radius: var(--border-width);

  width: 300px;
  height: 300px;
  place-self: center;
  place-content: center;
  color: #ededed;
  font: clamp(1em, 2vw + 2vh, 2em) sans-serif;
  text-align: center;
}

.card::after {
  content: '';
  z-index: -1;
  position: absolute;
  top: calc(-1 * var(--border-width));
  left: calc(-1 * var(--border-width));
  bottom: calc(-1 * var(--border-width));
  right: calc(-1 * var(--border-width));
  background: linear-gradient(60deg, #5f86f2, #a65ff2, #f25fd0, #f25f61, #f2cb5f, #abf25f, #5ff281, #5ff2f0);
  background-size: 300%;
  background-position: 0 50%;
  border-radius: calc(2 * var(--border-width));
  animation: moveGradient 4s alternate infinite;
}

@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
</style>
