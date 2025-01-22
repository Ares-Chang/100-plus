<template>
  <div
    from="black 50%" to="white 50%"
    h-screen flex items-center justify-center
    bg-gradient-to-tr
  >
    <div
      bg="gray-50/20"
      cursor-pointer rd-lg p-4
      text-center text-5xl font-bold
      mix-blend-difference transition-400
      hover:translate-x--30
    >
      文字与背景混合
      <p mt-3>
        mix-blend-difference
      </p>
    </div>
  </div>
</template>
