const happycss = require('happycss')

module.exports = {
  configureWebpack: {
    plugins: [
      new happycss({
        // cssPath: './src/assets/css/happycss.css'
        // importPath: './src/main.js'
        autoImport: false
      })
    ]
  },
  devServer: {
    // 设置代理
    proxy: {
      "/api": {
        target: "http://94.191.73.241:8077/",
        changOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}
