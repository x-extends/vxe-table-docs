import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createHtmlPlugin } from 'vite-plugin-html'
import XEUtils from 'xe-utils'

// https://vite.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const now = Date.now()
  return {
    base: `/v${env.VITE_APP_VXE_VERSION}/`,
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
      port: 8184,
      proxy: {
        '/example/': {
          target: 'https://vxeui.com'
        },
        '/component-api/': {
          target: 'https://vxeui.com'
        },
        '/resource/': {
          target: 'https://vxeui.com'
        }
      }
    },
    build: {
      sourcemap: command === 'build' ? false : 'inline',
      outDir: 'dist',
      assetsDir: 'static'
    }
  }
})
