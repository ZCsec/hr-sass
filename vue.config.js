const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭esLint
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target:  'http://ihrm.itheima.net/',
        changeOrigin: true,
        pathRewrite: {
        }
      }
    }
  }
})
