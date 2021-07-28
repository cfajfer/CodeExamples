const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({

  include: path.resolve(__dirname, 'src/assets'),

  webpack: (config, options) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },

  images: {
    domains: [process.env.BLOG_DOMAIN],
  }
})