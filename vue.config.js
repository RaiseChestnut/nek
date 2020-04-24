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
    // port: 2181,
    // host: "127.0.0.1",
    // https: false,
    // open: false,
    // proxy: {
    //   '/api': {
    //     target: 'http://119.45.2.113:8888',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}