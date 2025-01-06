const { defineConfig } = require('@vue/cli-service')
const XEUtils = require('xe-utils')

process.env.VUE_APP_PAGE_TITLE = 'Vxe Table 表格'
process.env.VUE_APP_DATE_NOW = Date.now()
process.env.VUE_APP_DATE_DATE = XEUtils.toDateString(process.env.VUE_APP_DATE_NOW, 'yyyy-MM-dd HH:mm:ss')

module.exports = defineConfig({
  publicPath: `/v${process.env.VUE_APP_VXE_VERSION}_old/`,
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 8083,
    proxy: {
      '/example/': {
        target: 'https://vxetable.cn',
        pathRewrite: {
          '^/example/': '/example/'
        }
      },
      '/resource/': {
        target: 'https://vxetable.cn',
        pathRewrite: {
          '^/resource/': '/resource/'
        }
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: `Vxe Table v${process.env.VUE_APP_VXE_VERSION}`
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    },
    externals: {
      'highlight.js': 'hljs'
    }
  },
  chainWebpack (config) {
    // 移除
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  }
})
