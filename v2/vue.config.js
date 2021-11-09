module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vxe-table/v2' : '/',
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
