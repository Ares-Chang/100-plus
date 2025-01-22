import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { BGColortList, TextColorList } from './src/composables/color'

export default defineConfig({
  // 预注册 class
  safelist: [
    ...BGColortList,
    ...TextColorList,
  ],
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        windsong: 'WindSong',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerAttributifyJsx(), // 该插件有加顺序问题，须写在第一位
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
