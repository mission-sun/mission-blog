const path = require('path');
// 配置公共请求路径
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  // 选项...
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        // target: 'http://localhost:3000', // 源地址
        target: 'http://fe.mission-sun.cn', // 线上地址
        changeOrigin: true, // 改变源
        ws: true,
      },
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@src', resolve('src'))
  }
};
