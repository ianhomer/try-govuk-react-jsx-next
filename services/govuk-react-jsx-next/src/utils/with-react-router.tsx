import React from "react";
const isServer = typeof window === "undefined";

const withReactRouter = (App) => {
  return class AppWithReactRouter extends React.Component<any, any> {
    render() {
      if (isServer) {
        const { StaticRouter } = require("react-router");
        return (
          <StaticRouter location={this.props.router.asPath}>
            <App {...this.props} />
          </StaticRouter>
        );
      }
      const { BrowserRouter } = require("react-router-dom");
      return (
        <BrowserRouter forceRefresh={true}>
          <App {...this.props} />
        </BrowserRouter>
      );
    }
  };
};

export default withReactRouter;
