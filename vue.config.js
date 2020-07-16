module.exports = {
  lintOnSave: false,
  // 选项...
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 源地址
        changeOrigin: true, // 改变源
        ws: true,
      },
    }
  }
};
