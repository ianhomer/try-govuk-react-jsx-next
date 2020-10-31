import {
  Accordion,
  BackLink,
  Breadcrumbs,
  CharacterCount,
  Checkboxes,
  DateInput,
  Details,
  ErrorMessage,
  ErrorSummary,
  Fieldset,
  Hint,
} from "govuk-react-jsx";

export default function Home() {
  return (
    <>
      <Accordion
        className="myClass"
        data-attribute="value"
        id="default-example"
        items={[
          {
            content: {
              children: [
                <ul key="0" className="govuk-list govuk-list--bullet">
                  <li>Example item 1</li>
                </ul>,
              ],
            },
            heading: {
              children: ["Section A"],
            },
          },
          {
            content: {
              children: [
                <ul key="0" className="govuk-list govuk-list--bullet">
                  <li>Example item 2</li>
                </ul>,
              ],
            },
            heading: {
              children: ["Section B"],
            },
          },
        ]}
      />
      <BackLink href="#">Back</BackLink>
      <Breadcrumbs
        items={[
          {
            children: ["Section"],
            href: "/foo",
          },
          {
            children: ["Sub-section"],
            href: "/bar",
          },
        ]}
      />
      <CharacterCount
        id="more-detail"
        label={{
          children: ["Can you provide more detail?"],
        }}
        maxlength={10}
        name="more-detail"
      />
      <Checkboxes
        fieldset={{
          legend: {
            children: ["What is your nationality?"],
          },
        }}
        hint={{
          children: [
            "If you have dual nationality, select all options that are relevant to you.",
          ],
        }}
        idPrefix="nationality"
        items={[
          {
            children: ["British"],
            value: "british",
          },
          {
            children: ["Irish"],
            value: "irish",
          },
          {
            children: ["Citizen of another country"],
            value: "other",
          },
        ]}
        name="nationality"
      />
      <DateInput
        fieldset={{
          legend: {
            children: ["What is your date of birth?"],
          },
        }}
        hint={{
          children: ["For example, 31 3 1980"],
        }}
        id="dob"
        items={[
          {
            className: "govuk-input--width-2",
            name: "day",
          },
          {
            className: "govuk-input--width-2",
            name: "month",
          },
          {
            className: "govuk-input--width-4",
            name: "year",
          },
        ]}
        namePrefix="dob"
      />
      <Details summaryChildren="Help with nationality">
        We need to know your nationality so we can work out which elections
        you’re entitled to vote in. If you can’t provide your nationality,
        you’ll have to send copies of identity documents through the post.
      </Details>
      <ErrorMessage visuallyHiddenText="Error">
        Error message about full name goes here
      </ErrorMessage>
    <ErrorSummary
  errorList={[
    {
      children: [
        'The date your passport was issued must be in the past'
      ],
      href: '#example-error-1'
    },
    {
      children: [
        'Enter a postcode, like AA1 1AA'
      ],
      href: '#example-error-2'
    }
  ]}
  titleChildren="There is a problem"
/>
    <Fieldset
  legend={{
    children: [
      'What is your address?'
    ]
  }}
 />
      <Hint>bar</Hint>
    </>
  );
}
