/**
 * https://www.npmjs.com/package/vite-plugin-vue-setup-extend
 * https://github.com/vbenjs/vite-plugin-vue-setup-extend/tree/main#readme
 * 让vue脚本设置语法支持name属性
 */
import setupExtend from 'vite-plugin-vue-setup-extend'

export default function createSetupExtend() {
  return setupExtend()
}
