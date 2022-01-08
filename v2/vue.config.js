const version = 2
let publicPath = '/'
if (process.env.NODE_ENV === 'production') {
  publicPath = `/vxe-table/v${version}/`
  if (process.env.npm_lifecycle_event === 'build:main') {
    publicPath = `/v${version}/`
    process.env.VUE_APP_CDN_URL = '/'
    process.env.VUE_APP_MAIN_URL = '/'
  }
}

module.exports = {
  publicPath,
  outputDir: '../v4/public/v2',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    },
    externals: {
      'xlsx': 'XLSX',
      'jsbarcode': 'JsBarcode',
      'qrcode': 'QRCode',
      'moment': 'moment',
      'sortablejs': 'Sortable'
    }
  },
  transpileDependencies: ['highlight.js']
}
