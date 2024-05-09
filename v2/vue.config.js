const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

let publicPath = '/'
if (process.env.NODE_ENV === 'production') {
  publicPath = `/v${process.env.VUE_APP_VXE_VERSION}/`
  process.env.VUE_APP_CDN_URL = '/umd/'
  process.env.VUE_APP_MAIN_URL = '/'
}

module.exports = defineConfig({
  publicPath,
  assetsDir: 'static',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: `vxe-table v${process.env.VUE_APP_VXE_VERSION}`
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    },
    plugins: [
      new NodePolyfillPlugin()
    ],
    externals: {
      'highlight.js': 'hljs',
      'jsbarcode': 'JsBarcode',
      'qrcode': 'QRCode',
      'moment': 'moment',
      'sortablejs': 'Sortable'
    }
  },
  chainWebpack (config) {
    // 移除
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  }
})
