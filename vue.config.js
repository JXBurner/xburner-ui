/*
 * @Author: jinx
 * @Date: 2021-12-01 11:32:39
 * @LastEditors: jinx
 * @LastEditTime: 2021-12-01 15:12:55
 * @Descripttion: 
 * @path: 
 */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
console.log(process.env.NODE_ENV)
module.exports = {
  pages: {
    // 修改文件入口文件
    index: {
      entry: 'example/main.js', // page的入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html' // 输出文件名
    }
  },
  productionSourceMap: process.env.NODE_ENV === 'development',
  devServer: {
    port: 3000
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('example'),
        '~': resolve('packages/')
      }
    },
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined
  },
  // 扩展webpack配置，使用packages加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(resolve('packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改配置项
        return options
      })
  }
}
