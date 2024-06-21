const { defineConfig } = require('@vue/cli-service')

process.env.VUE_APP_DATE_NOW = Date.now()

module.exports = defineConfig({
  publicPath: `/v${process.env.VUE_APP_VXE_VERSION}/`,
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
