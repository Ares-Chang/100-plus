/**
 * 自 Volar 0.36 以来，它对未知属性非常严格
 * 为了增强 UnoCSS Attributify 未覆盖的 TS 类型支持
 * 本文件以下操作为退出 Volar 对未知属性检查限制
 * @see 参考 {@link https://github.com/unocss/unocss/tree/main/packages/preset-attributify/#vue}
 */
declare module '@vue/runtime-dom' {
  interface HTMLAttributes {
    [key: string]: any
  }
}
declare module '@vue/runtime-core' {
  interface AllowedComponentProps {
    [key: string]: any
  }
}
export {}