/// <reference types="vitest" />

import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    Vue(),

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
