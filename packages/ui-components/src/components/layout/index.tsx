import { Template } from "govuk-react-jsx";
import { Helmet } from "react-helmet";

const headerProps = {
  serviceName: "ui-components",
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

function Layout({ children }: any): JSX.Element {
  return (
    <Template header={headerProps}>
      <Helmet>
        <title>ui-components</title>
      </Helmet>
      {children}
    </Template>
  );
}

export { Layout };
