
let path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

'use strict'
module.exports = {
  // 基本路径
  publicPath: './',
  outputDir: 'dist',
  /* 放置静态资源的文件夹名称 */
  assetsDir: 'static',
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  publicPath: "/customers/aruba/dist"
}





