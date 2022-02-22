const version = 2
let publicPath = '/'
if (process.env.NODE_ENV === 'production') {
  publicPath = `/vxe-table/v${version}/`
  if (process.env.npm_lifecycle_event === 'build:main') {
    publicPath = `/v${version}/`
    process.env.VUE_APP_CDN_URL = '/umd/'
    process.env.VUE_APP_MAIN_URL = '/'
  }
}

module.exports = {
  publicPath,
  outputDir: '../v4/public/v2',
  assetsDir: 'static',
  productionSourceMap: false,
  transpileDependencies: ['highlight.js'],
  configureWebpack: {
    performance: {
      hints: false
    },
    externals: {
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
}
