/**
 * 按照格式设置页面标题
 * @param title page title
 */
export function useSetTitle(title: string) {
  useTitle(`${title.trim()} | Ares Chang`)
}

/**
 * 获取指定范围随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 指定范围内随机数
 */
export function useRandom(min: number, max: number) {
  return Math.random() * (max - min) + min
}

/**
 * 获取指定范围随机整数
 * @param min 最小值
 * @param max 最大值
 * @returns 指定范围内随机整数
 */
export function useRandomInt(min: number, max: number) {
  return Math.round(useRandom(min, max))
}
