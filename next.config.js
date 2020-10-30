const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const optimizedImages = require('next-optimized-images');
const withTranspileModules = require('next-transpile-modules')(
  [
    'govuk-frontend', 
    'govuk-react-jsx'
  ]
);

module.exports = withPlugins([
  //[optimizedImages, {
  //  inlineImageLimit: 16
  //}],
  [withImages, {
    fileExtensions: ["ico","png","svg"],
    inlineImageLimit: false,
    esModule: false
  }],
  [withTranspileModules]
])
