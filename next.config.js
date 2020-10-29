const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    //config.externals = []
    return config
  }
})
