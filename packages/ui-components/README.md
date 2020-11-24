# ui-components

This directory is a wrapper around the ui-components to provide react to the
build process of ui-components without leaking react to service.

See the following issues for background:

- <https://github.com/vercel/next.js/issues/9022>
- <https://github.com/pnpm/pnpm/issues/2743>
- <https://github.com/facebook/react/issues/13991>

Essentially:

- if next.js finds a link to react in a dependency then it picks up that react
  as duplicate.
- with `config.resolve.alias["react"] = require.resolve("react");` in
  .next.config.js doesn't seem to fix it (as one might expect)
- dependency needs react as a devDependency to run unit tests and storybook.

By wrapping ui-components in a wrapper package ui-components picks up react for
unit tests and storybook, however the react app doesn't find them so sticks to
the single local react it its `node_module` that it knows and loves. ahh :)
