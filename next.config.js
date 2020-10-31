const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const withTranspileModules = require('next-transpile-modules')(
  [
    'govuk-frontend', 
    'govuk-react-jsx'
  ]
);

module.exports = withPlugins([
  [withImages, {
    inlineImageLimit: false,
    esModule: false
  }],
  [withTranspileModules],
])
