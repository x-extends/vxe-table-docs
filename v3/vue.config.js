module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vxe-table/v3' : '/',
  outputDir: '../v4/public/v3',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    }
  },
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
