const { defineConfig } = require('@vue/cli-service')
const XEUtils = require('xe-utils')

const now = Date.now()
process.env.VUE_APP_DATE_NOW = now
process.env.VUE_APP_DATE_DATE = XEUtils.toDateString(now, 'yyyy-MM-dd HH:mm:ss')

module.exports = defineConfig({
  publicPath: process.env.VUE_APP_BASE_PATH,
  assetsDir: 'static',
  transpileDependencies: true,
  productionSourceMap: false,
  devServer: {
    port: process.env.VUE_APP_SERVER_PORT
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: `${process.env.VUE_APP_PAGE_TITLE} v${process.env.VUE_APP_VXE_VERSION}`
    }
  },
  configureWebpack: {
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename]
      }
    },
    performance: {
      hints: false
    },
    externals: {
      axios: 'axios'
    }
  },
  chainWebpack (config) {
    // 移除
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  }
})
