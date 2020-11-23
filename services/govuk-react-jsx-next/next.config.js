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
const { DuplicatesPlugin } = require("inspectpack/plugin");
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
    webpack: (config) => {
      config.plugins.push(
        new DuplicatesPlugin({
          emitErrors: false,
          verbose: false,
        })
      );

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

      //config.resolve.symlinks = false;
      config.resolve.alias["govuk-react-jsx"] = require.resolve(
        "govuk-react-jsx"
      );
      //config.resolve.alias["govuk-frontend"] = require.resolve(
      //  "govuk-frontend"
      //);
      //config.resolve.alias["@try-govuk-react-jsx-next/ui-components"] = require.resolve(
      //  "@try-govuk-react-jsx-next/ui-components"
      //);

      //config.resolve.alias["@try-govuk-react-jsx-next/ui-components"] = path.resolve(__dirname, '../..', 'packages', "ui-components");
      //require.resolve(
      //  "@try-govuk-react-jsx-next/ui-components"
      //);
      // Address duplications raised by duplicates plugin
      //config.resolve.alias["prop-types"] = require.resolve("prop-types");
      //config.resolve.alias["next"] = path.resolve(__dirname, '.', 'node_modules', "next");
      //config.resolve.alias["react"] = require.resolve("react");
      //config.resolve.alias["react"] = path.resolve(__dirname, '.', 'node_modules', "react");
      //config.resolve.alias["react-dom"] = require.resolve("react-dom");
      //config.resolve.alias["react-dom"] = path.resolve(__dirname, '.', 'node_modules', "react-dom");
      //config.resolve.alias["react-helmet"] = path.resolve(__dirname, '.', 'node_modules', "react-helmet");
      //config.resolve.alias["@babel/runtime"] = path.resolve(__dirname, '../..', 'node_modules', "@babel/runtime");
      //config.resolve.alias["regenerator-runtime"] = path.resolve(__dirname, '../..', 'node_modules', "regenerator-runtime");
      return config;
    },
  }
);
