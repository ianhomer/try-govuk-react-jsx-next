import "./index.scss";
import { AppProps } from "next/app";
import { Layout } from "@try-govuk-react-jsx-next/ui-components";
import withReactRouter from "../utils/with-react-router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default withReactRouter(MyApp);
