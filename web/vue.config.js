module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: '../book-server/modules/backend/www',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
        }
      }
    }
  },
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  },
}
