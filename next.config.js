const path = require('path');

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|ico|svg)$/,
      include: [
        path.resolve(__dirname, 'node_modules/govuk-frontend'),
        path.resolve(__dirname, 'node_modules/govuk-react-jsx')
      ],
      use: {
        loader: 'file-loader',
        options: {
          name: "[name].[ext]",
          outputPath: "images",
        }
      }
    });
    return config
  }
}
