const XEUtils = require('xe-utils')

process.env.VUE_APP_PAGE_TITLE = 'Vxe Table'
process.env.VUE_APP_DATE_NOW = Date.now()
process.env.VUE_APP_DATE_DATE = XEUtils.toDateString(process.env.VUE_APP_DATE_NOW, 'yyyy-MM-dd HH:mm:ss')

module.exports = {
  publicPath: `/other${process.env.VUE_APP_VXE_VERSION}/`,
  assetsDir: 'static',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Vxe Table 扩展插件'
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    },
    externals: {
      'highlight.js': 'hljs',
      xlsx: 'XLSX',
      exceljs: 'ExcelJS',
      jspdf: 'jspdf',
      jsbarcode: 'JsBarcode',
      qrcode: 'QRCode',
      dayjs: 'dayjs',
      moment: 'moment',
      sortablejs: 'Sortable'
    }
  },
  chainWebpack (config) {
    // 移除
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  }
}
