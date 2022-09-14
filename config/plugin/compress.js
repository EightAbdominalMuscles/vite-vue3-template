/**
 * gzip压缩
 */
import compressPlugin from 'vite-plugin-compression'

export default function configCompressPlugin(
  compress = 'gzip', // gzip | 'brotli' | false
  deleteOriginFile = false
) {
  const plugins = []
  if (compress === 'gzip') {
    plugins.push(
      compressPlugin({
        ext: '.gz',
        deleteOriginFile
      })
    )
  }
  if (compress === 'brotli') {
    plugins.push(
      compressPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile
      })
    )
  }
  return plugins
}
