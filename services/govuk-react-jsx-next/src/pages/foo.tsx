import { Checkboxes, Hint } from "govuk-react-jsx";

import { Bar, Hook } from "@try-govuk-react-jsx-next/ui-components";

export default function Foo() {
  return (
    <>
      <Hint>foo</Hint>
      <Hint>
        <Bar />
      </Hint>
      <Hook />
      <Checkboxes
        fieldset={{
          legend: {
            children: ["This is legend"],
          },
        }}
        hint={{
          children: ["this is hint."],
        }}
        idPrefix="checkBoxIdPrefix"
        items={[
          {
            children: ["option1"],
            value: "option1",
          },
        ]}
        name="checkbox"
      />
    </>
  );
}
