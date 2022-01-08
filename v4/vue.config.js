const version = 4
let publicPath = '/'
if (process.env.NODE_ENV === 'production') {
  publicPath = `/vxe-table/v${version}/`
  if (process.env.npm_lifecycle_event === 'build:main') {
    publicPath = `/v${version}/`
    process.env.VUE_APP_CDN_URL = `/v${version}/`
  }
}

module.exports = {
  publicPath,
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
      'sortablejs': 'Sortable'
    }
  }
}
