//const path = require("path");
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withTranspileModules = require("next-transpile-modules")(
  [
    "@try-govuk-react-jsx-next/ui-components",
    "govuk-frontend",
    "govuk-react-jsx",
  ],
  {
    //resolveSymlinks: false,
  }
);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
//const TerserPlugin = require("terser-webpack-plugin");
//const { DuplicatesPlugin } = require("inspectpack/plugin");
//const { IgnorePlugin } = require("webpack");

module.exports = withPlugins(
  [
    [
      withImages,
      {
        inlineImageLimit: false,
        esModule: false,
      },
    ],
    [withTranspileModules],
    [withBundleAnalyzer],
  ],
  {
    trailingSlash: true,
    webpack: (config, options) => {
      config.resolve.alias["govuk-react-jsx"] = require.resolve(
        "govuk-react-jsx"
      );

      // Optimize the source files in bundle
      //config.optimization = {
      //minimize: true,
      //minimizer: [
      //  new TerserPlugin({
      //    extractComments: true,
      //  }),
      //],
      //};
      // Analyze bundles
      //if (process.env.ANALYZE_DIRECT === 'true') {
      //  config.plugins.push(
      //    new BundleAnalyzerPlugin({
      //        analyzerMode: 'static',
      //        reportFilename: options.isServer
      //          ? '../analyze/server.html'
      //          : './analyze/client.html',
      //        openAnalyzer: false
      //      })
      //  );
      //}
      return config;
    },
  }
);
