import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/**
 * 解决部分 Unocss Attributes 模式下 TypeScript 检查报错问题
 * 解决方法 {@link https://github.com/unocss/unocss/tree/main/packages/preset-attributify/#vue-3}
 * 问题链接 {@link https://github.com/unocss/unocss/issues/742}
 */
declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends AttributifyAttributes {}
}