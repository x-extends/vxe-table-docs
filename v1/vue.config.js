module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vxe-table/v1' : '/',
  outputDir: '../v4/public/v1',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  transpileDependencies: ['highlight.js']
}
