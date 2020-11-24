const path = require("path");
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
  ],
  {
    trailingSlash: true,
    webpack: (config) => {
      //config.plugins.push(
      //  new DuplicatesPlugin({
      //    emitErrors: false,
      //    verbose: false,
      //  })
      //);

      //config.plugins.push(
      //  new IgnorePlugin({
      //    checkResource (resource) {
      //      if (!resource) {
      //        return false;
      //      }
      //      if ("string" != typeof resource) {
      //        return false
      //      }
      //      //console.log(resource);
      //      if (resource.includes("ui-components")) {
      //        console.log(resource);
      //        console.log("XX");
      //        return false;
      //      }
      //      return false
      //   }
      //  })
      //);
      //config.plugins.push(
      //  new IgnorePlugin({
      //    resourceRegExp: /.*ui-components.node_modules.*/
      //  })
      //);

      //config.externals.push("react");
      //
      //config.module.rules.push({
      //  test: /ui-components\/node_modules\/react/,
      //  use: 'null-loader',
      //});

      //config.resolve.symlinks = false;
      config.resolve.alias["govuk-react-jsx"] = require.resolve(
        "govuk-react-jsx"
      );
      config.resolve.alias["react"] = require.resolve("react");
      config.resolve.alias["react-dom"] = require.resolve("react-dom");
      return config;
    },
  }
);
