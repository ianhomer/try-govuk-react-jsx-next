import {
  Template
} from 'govuk-react-jsx';
import { Helmet } from 'react-helmet';
import { Route, StaticRouter as Router } from 'react-router-dom';

const headerProps = {
  serviceName: 'try-next-gds',
  navigation: [
    {
      children: 'Foo',
      to: '/foo',
    },
    {
      children: 'Bar',
      to: '/bar',
    },
  ],
};

export default function Layout({ children }) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Template header={headerProps}>
        <Helmet>
          <title>try-next-gds</title>
        </Helmet>
        {children}
      </Template>
    </Router>
  )
}
