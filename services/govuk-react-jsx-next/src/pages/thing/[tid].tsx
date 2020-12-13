import { CharacterCount, Checkboxes, Hint } from "govuk-react-jsx";

import { Bar, Hook } from "@try-govuk-react-jsx-next/ui-components";
import { useRouter } from "next/router";

export default function Foo() {
  const router = useRouter();
  const { tid } = router.query;

  return (
    <>
      <Hint>thing {tid}</Hint>
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
      <CharacterCount
        id="more-detail"
        label={{
          children: ["Can you provide more detail?"],
        }}
        maxlength={10}
        name="more-detail"
      />
    </>
  );
}
