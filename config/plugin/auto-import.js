/**
 * https://www.npmjs.com/package/unplugin-auto-import
 * 自动按需引入
 */
import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
  return autoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    dts: false
  })
}
