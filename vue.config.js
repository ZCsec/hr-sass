const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭esLint
  lintOnSave: false,
  devServer: {
    proxy: {
      '': {
        // target: 'http://ihrm-java.itheima.net',
        target: 'http://ihrm.itheima.net',
        changeOrigin: true,
        pathRewrite: {}
      }
      // '/prod-api': {
      //   target: 'http://ihrm.itheima.net',
      //   changeOrigin: true,
      //   pathRewrite: {}
      // }
    }
  }
})
