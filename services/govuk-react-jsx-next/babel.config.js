//
// Note that babel.config.js (project wide configuration) is treated differently to
// .babelrc (file-relative configuration) - see https://babeljs.io/docs/en/config-files.
// Transpiling of dependent packages works better with a babel.config.js
//
module.exports = {
  presets: ["next/babel"],
};
