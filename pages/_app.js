import './index.scss';
import Layout from '../components/layout'
import withReactRouter from '../utils/with-react-router';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default withReactRouter(MyApp)
