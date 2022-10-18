/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),

    /** @see https://github.com/hannoeru/vite-plugin-pages */
    Pages({
      exclude: ['**/components/*.vue'],
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
  ],

  /** @see https://github.com/vitest-dev/vitest */
  test: {
    environment: 'jsdom',
  },
})
