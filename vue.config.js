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
  }
}
