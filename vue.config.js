const path = require('path')

const reslove = dir => path.join(__dirname,dir)

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'



module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack:config => {
    config.reslove.alias
      .set('@',reslove('src'))
      .set('_c',reslove('src/components'))
  },
  // 打包时不生成.map文件
  procutionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
