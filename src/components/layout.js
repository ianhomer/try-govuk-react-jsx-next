import { Template } from "govuk-react-jsx";
import { Helmet } from "react-helmet";

const headerProps = {
  serviceName: "try-next-gds",
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
        <title>try-next-gds</title>
      </Helmet>
      {children}
    </Template>
  );
}
