<!-- {@see https://codepen.io/thebabydino/pen/WNVPdJg} -->
<template>
  <div grid h-screen w-screen place-items-center>
    <div class="card">
      一个内部闪光流动的卡片
    </div>
  </div>
</template>

<style scoped>
@property --a {
  /* 必须注册 --a 以使动画运行 */
  syntax: '<angle>';
  initial-value: 0deg;
  /* 仅在伪元素上使用，在其他地方继承时性能更好，如果设置为 false，请参阅 */
  /* https://www.bram.us/2024/10/03/benchmarking-the-performance-of-css-property/ */
  inherits: false;
}

.card {
  /* 核心 */
  overflow: hidden;
  position: relative;
  width: Min(12.5em, 80vmin);
  aspect-ratio: 1;
  border-radius: 0.5em;

  place-self: center;
  place-content: center;
  padding: 0.5em;
  color: #ededed;
  font: clamp(1em, 2vw + 2vh, 2em) sans-serif;
  text-align: center;
  text-wrap: balance;
}

.card::before {
  content: '';
  position: absolute;
  z-index: -1;
  inset: -1em;
  border: solid 1.25em;
  border-image: conic-gradient(
      from var(--a),
      #669900,
      #99cc33,
      #ccee66,
      #006699,
      #3399cc,
      #990066,
      #cc3399,
      #ff6600,
      #ff9900,
      #ffcc00,
      #669900
    )
    1;
  filter: blur(0.75em);
  animation: a 4s linear infinite;
}

@keyframes a {
  to {
    --a: 1turn;
  }
}
</style>
