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
      config.resolve.alias["govuk-react-jsx"] = require.resolve(
        "govuk-react-jsx"
      );
      return config;
    },
  }
);
