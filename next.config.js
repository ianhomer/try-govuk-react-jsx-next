const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  //[optimizedImages, {
  //  inlineImageLimit: 16
  //}],
  [withImages, {
    inlineImageLimit: false
  }]
])
