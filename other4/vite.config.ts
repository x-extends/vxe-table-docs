import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createHtmlPlugin } from 'vite-plugin-html'
import externalGlobals from 'rollup-plugin-external-globals'
import XEUtils from 'xe-utils'

// https://vite.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const now = Date.now()
  return {
    base: env.VITE_APP_BASE_PATH,
    define: {
      'import.meta.env.VITE_APP_DATE_NOW': now
    },
    plugins: [
      vue(),
      vueJsx(),
      createHtmlPlugin({
        inject: {
          data: {
            ...env,
            VITE_APP_DATE_NOW: now,
            VITE_APP_DATE_DATE: XEUtils.toDateString(now, 'yyyy-MM-dd HH:mm:ss')
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': path.join(__dirname, './src')
      },
      extensions: ['.js', '.vue', '.json', '.ts', '.tsx']
    },
    server: {
      host: '0.0.0.0',
      port: Number(env.VITE_APP_SERVER_PORT)
    },
    build: {
      sourcemap: command === 'build' ? false : 'inline',
      outDir: 'dist',
      assetsDir: 'static',
      build: {
        sourcemap: command === 'build' ? false : 'inline',
        outDir: 'dist',
        assetsDir: 'static',
        rollupOptions: {
          // 不打包依赖
          axios: ['axios', 'highlight.js', 'jsbarcode', 'qrcode', 'dayjs', 'moment', 'sortablejs'],
          plugins: [
          // 不打包依赖映射的对象
            externalGlobals({
              axios: 'axios',
              'highlight.js': 'hljs',
              jsbarcode: 'JsBarcode',
              qrcode: 'QRCode',
              dayjs: 'dayjs',
              moment: 'moment',
              sortablejs: 'Sortable'
            })
          ]
        }
      }
    }
  }
})
