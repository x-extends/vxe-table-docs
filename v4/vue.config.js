module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vxe-table/v4/' : '/',
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
