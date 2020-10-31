import { Template } from "govuk-react-jsx";
import { Helmet } from "react-helmet";

const headerProps = {
  serviceName: "try-govuk-react-jsx-next",
  navigation: [
    {
      children: "Foo",
      to: "/foo",
    },
    {
      children: "Kitchen Sink",
      to: "/kitchen-sink",
    },
  ],
};

export default function Layout({ children }) {
  return (
    <Template header={headerProps}>
      <Helmet>
        <title>try-govuk-react-jsx-next</title>
      </Helmet>
      {children}
    </Template>
  );
}
