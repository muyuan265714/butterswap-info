module.exports = {
  chainWebpack: config => {
    // Remove prefetch plugin
    config.plugins.delete('prefetch')
    // Remove preload plugin
    config.plugins.delete('preload')
    // Compressed code
    config.optimization.minimize(true)
    // Segmentation code
    config.optimization.splitChunks({
      chunks: 'all'
    })
  },
  devServer: {
    host: process.env.VUE_APP_HOST || '192.168.31.168',
    port: process.env.VUE_APP_PORT || '12345',
    disableHostCheck: process.env.NODE_ENV === 'development',
    proxy: {
      '/api': {
        target: 'https://google.com', //代理接口
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //代理的路径
        }
      }
    }
  },
  assetsDir: 'static',
  configureWebpack: config => {}
}
