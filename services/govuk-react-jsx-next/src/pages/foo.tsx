import { Hint } from "govuk-react-jsx";

import { Bar /*Hook*/ } from "@try-govuk-react-jsx-next/ui-components";

export default function Foo() {
  return (
    <>
      <Hint>foo</Hint>
      <Hint>
        <Bar />
      </Hint>
    </>
  );
}
