import {
  Hint,
  Template
} from 'govuk-react-jsx';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <Template>
      <Helmet>
        <title>try govuk-react-jsx</title>
      </Helmet>
      <Hint>
        This is a hint
      </Hint>
    </Template>
  )
}
