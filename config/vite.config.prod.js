import { mergeConfig } from 'vite'
import { createHash } from 'crypto'
import baseConig from './vite.config.base'
// gzip压缩
import configCompressPlugin from './plugin/compress'
// 生成打包报告
import configVisualizerPlugin from './plugin/visualizer'
// 图片压缩 (暂时取消图片压缩,发布时资源难下载)
// import configImageminPlugin from './plugin/imagemin'
import createSvgIcon from './plugin/svg-icon'

export default mergeConfig(
  {
    mode: 'production',
    plugins: [
      configCompressPlugin(),
      configVisualizerPlugin(),
      // configImageminPlugin(),
      createSvgIcon(true)
    ],
    build: {
      rollupOptions: {
        output: {
          /**
           *! hacky
           *! vite 打包后所有 js 文件(无论是否修改) hash 都改变了，怎么实现只有改动文件的 hash 值变化。其他文件才能缓存
           *! https://github.com/vitejs/vite/issues/6773
           **/
          entryFileNames: 'assets/[name].js',
          chunkFileNames: (chunkInfo) => {
            if (chunkInfo.isDynamicEntry) {
              const hash = createHash('md5')
                .update(
                  Object.values(chunkInfo.modules)
                    .map((m) => m.code)
                    .join()
                )
                .digest('hex')
                .substr(0, 6)
              return 'assets/[name].' + hash + '.js'
            } else {
              return 'assets/[name].[hash].js'
            }
          },
          manualChunks: {
            'element-plus': ['element-plus'],
            lodash: ['lodash'],
            vue: ['vue', 'vue-router', 'pinia']
          }
        }
      },
      chunkSizeWarningLimit: 2000 // 文件超出配置时警告
    }
  },
  baseConig
)
