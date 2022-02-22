const version = 4
let publicPath = '/'
if (process.env.NODE_ENV === 'production') {
  publicPath = `/vxe-table/other${version}/`
  if (process.env.npm_lifecycle_event === 'build:main') {
    publicPath = `/other${version}/`
    process.env.VUE_APP_CDN_URL = '/umd/'
    process.env.VUE_APP_MAIN_URL = '/'
  }
}

module.exports = {
  publicPath,
  outputDir: '../v4/public/other4',
  assetsDir: 'static',
  productionSourceMap: false,
  transpileDependencies: ['highlight.js'],
  configureWebpack: {
    performance: {
      hints: false
    },
    externals: {
      'xlsx': 'XLSX',
      'exceljs': 'ExcelJS',
      'jspdf': 'jspdf',
      'jsbarcode': 'JsBarcode',
      'qrcode': 'QRCode',
      'dayjs': 'dayjs',
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
