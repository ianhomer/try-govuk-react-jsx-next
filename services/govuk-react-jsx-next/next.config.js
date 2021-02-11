//const path = require("path");
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withTranspileModules = require("next-transpile-modules")([
  "@try-govuk-react-jsx-next/ui-components",
  "govuk-frontend",
  "govuk-react-jsx",
]);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([
  [
    withImages,
    {
      inlineImageLimit: false,
      esModule: false,
    },
  ],
  [withTranspileModules],
  [withBundleAnalyzer],
]);
