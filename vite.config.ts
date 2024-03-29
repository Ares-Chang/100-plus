/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// @ts-expect-error failed to resolve types
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),

    /**
     * reactivityTransform 已于 Vue 3.3 版本被标记为已弃用，Vue 3.4 版本于核心包中移除
     * 详情参见 @see https://github.com/vuejs/rfcs/discussions/369#discussioncomment-5059028
     * 现已在 Vue Macros 外部实现
     * {@link 文档 https://vue-macros.sxzz.moe/features/reactivity-transform.html}
     */
    ReactivityTransform(),

    /** @see https://github.com/hannoeru/vite-plugin-pages */
    Pages({
      extensions: ['vue', 'ts', 'js', 'tsx', 'jsx'],
      exclude: ['**/components/*.vue'],
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
      ],
    }),
    /** @see https://github.com/johncampionjr/vite-plugin-vue-layouts */
    Layouts(),

    /** @see https://github.com/antfu/unplugin-auto-import */
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    /** @see https://github.com/antfu/vite-plugin-components */
    Components({
      dts: true,
      resolvers: [NaiveUiResolver()],
    }),

    /**
     * @see https://github.com/antfu/unocss
     * see unocss.config.ts for config
     */
    Unocss(),

    /**
     * JSX 配置
     * @see https://github.com/vitejs/vite-plugin-vue
     */
    VueJsx(),
  ],

  /** @see https://github.com/vitest-dev/vitest */
  test: {
    environment: 'jsdom',
  },
})
