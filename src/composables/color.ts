/**
 * 颜色模块
 */
export const ColorList = [
  'white',
  'black',
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'sky',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
  'gray',
  'slate',
]

/**
 * 注册
 */
export const BGColortList = ColorList.map(item => `bg-${item}`)
export const TextColorList = ColorList.map(item => `color-${item}`)
