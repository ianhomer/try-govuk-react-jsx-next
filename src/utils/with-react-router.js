import React from "react";
import { BrowserRouter } from "react-router-dom";
const isServer = typeof window === "undefined";

const withReactRouter = (App) => {
  return class AppWithReactRouter extends React.Component {
    render() {
      if (isServer) {
        const { StaticRouter } = require("react-router");
        return (
          <StaticRouter location={this.props.router.asPath}>
            <App {...this.props} />
          </StaticRouter>
        );
      }
      return (
        <BrowserRouter forceRefresh={true}>
          <App {...this.props} />
        </BrowserRouter>
      );
    }
  };
};

export default withReactRouter;
