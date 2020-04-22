module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': '@/content',
        'common': '@/common',
        'views': '@/views',
        'assets': '@/assets',
        'network': '@/network'
      }
    }
  },
  devServer: {
    port: 8081,
    host: "192.168.0.142",
    https: false,
    open: false,
    proxy: {
      '/api': {
        target: 'http://119.45.2.113:8888',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}