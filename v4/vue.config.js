const { defineConfig } = require('@vue/cli-service')

let publicPath = '/'
if (process.env.NODE_ENV === 'production') {
  publicPath = `/v${process.env.VUE_APP_VXE_VERSION}/`
  process.env.VUE_APP_CDN_URL = '/umd/'
  process.env.VUE_APP_MAIN_URL = '/'
}

process.env.VUE_APP_DATE_NOW = Date.now()

module.exports = defineConfig({
  publicPath,
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 8084,
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
      title: `Vxe UI Table v${process.env.VUE_APP_VXE_VERSION}`
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
