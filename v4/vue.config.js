const version = 4
let publicPath = '/'
if (process.env.NODE_ENV === 'production') {
  publicPath = `/vxe-table/v${version}/`
  if (process.env.npm_lifecycle_event === 'build:main') {
    publicPath = `/v${version}/`
    process.env.VUE_APP_CDN_URL = '/umd/'
    process.env.VUE_APP_MAIN_URL = '/'
  }
}

process.env.VUE_APP_DATE_NOW = Date.now()

module.exports = {
  publicPath,
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/resource/': {
        target: 'https://vxetable.cn',
        pathRewrite: {
          '^/resource/': '/resource/'
        }
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'vxe-table v4'
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    },
    externals: {
      'highlight.js': 'hljs'
    }
  },
  chainWebpack (config) {
    // 移除
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  }
}
