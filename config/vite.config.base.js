import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import svgLoader from 'vite-svg-loader'
// 让vue脚本设置语法支持name属性
import createSetupExtend from './plugin/setup-extend'
import viteEslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    createSetupExtend(),
    viteEslint({
      failOnError: false
    })
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname, './')
      },
      {
        find: '@',
        replacement: resolve(__dirname, '../src')
      },
      {
        find: 'components',
        replacement: resolve(__dirname, '../src/components')
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, '../src/assets')
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js'
      }
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  define: {
    'process.env': {}
  },
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove()
              }
            }
          }
        }
      ]
    }
  },
  esbuild: {}
})
