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
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'vxe-table v4 集成第三方',
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    },
    externals: {
      'highlight.js': 'hljs',
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
