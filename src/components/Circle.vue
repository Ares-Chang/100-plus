<script setup lang="ts">
const props = withDefaults(defineProps<{
  /**
   * 百分比
   */
  percentage?: number
  /**
   * 主色
   */
  color?: string
  /**
   * 辅助色
   */
  inactiveColor?: string
  /**
   * 环宽
   */
  strokeWidth?: number
  /**
   * 宽度
   */
  width?: number
}>(), {
  percentage: 0,
  color: '#e88080',
  inactiveColor: '#ffffff1f',
  strokeWidth: 20,
  width: 300,
})

const relativeStrokeWidth = computed(() =>
  ((props.strokeWidth / props.width) * 100).toFixed(1),
)

const radius = computed(() =>
  Number(50 - Number.parseFloat(relativeStrokeWidth.value) / 2),
)

const perimeter = computed(() => 2 * Math.PI * radius.value)

const circlePathStyle = computed(() => ({
  // 控制为 0 时，不显示
  opacity: props.percentage ? 1 : 0,
  strokeDasharray: `${perimeter.value * (props.percentage / 100)}px, ${perimeter.value}px`,
}))
</script>

<template>
  <div
    class="circle"
    :style="{
      width: `${props.width}px`,
      height: `${props.width}px`,
    }"
  >
    <svg viewBox="0 0 100 100">
      <circle
        :r="radius"
        :stroke="props.inactiveColor"
        :stroke-width="relativeStrokeWidth"
      />
      <circle
        :r="radius"
        :stroke="props.color"
        :stroke-width="relativeStrokeWidth"
        :style="circlePathStyle"
      />
    </svg>

    <div class="text">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.circle {
  position: relative;
  border-radius: 50%;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
}

.circle > svg {
  transform: rotate(90deg);
}

/* 进度条圆环 */
.circle circle {
  cx: 50%;
  cy: 50%;
  fill: none;
  stroke-linecap: round;
  transition:
    stroke-dasharray 0.6s ease 0s,
    stroke 0.6s ease,
    opacity ease 0.6s;
}
</style>
