import "./index.scss";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import withReactRouter from "../utils/with-react-router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default withReactRouter(MyApp);
