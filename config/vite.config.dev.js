import { mergeConfig } from 'vite'

import baseConig from './vite.config.base'
import createSvgIcon from './plugin/svg-icon'

export default mergeConfig(
  {
    mode: 'development',
    plugins: [createSvgIcon(false)],
    server: {
      open: true,
      host: true,
      proxy: {
        // https://cn.vitejs.dev/config/#server-proxy
        '/prod-api': {
          target: 'http://vue.ruoyi.vip/prod-api/',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/prod-api/, '')
        }
      },
      fs: {
        strict: true
      }
    }
  },
  baseConig
)
