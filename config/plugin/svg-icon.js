/**
 * https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md
 * 用于生成 svg 雪碧图.
 */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default function createSvgIcon(isBuild) {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: isBuild
  })
}
