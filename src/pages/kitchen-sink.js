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
  FileUpload,
  Hint,
  Input,
  InsetText,
  Label,
  Panel,
  PhaseBanner,
  Radios,
  Select,
  SkipLink,
  SummaryList,
  Table,
  Tabs,
  Tag,
  Textarea,
  WarningText,
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
            children: ["The date your passport was issued must be in the past"],
            href: "#example-error-1",
          },
          {
            children: ["Enter a postcode, like AA1 1AA"],
            href: "#example-error-2",
          },
        ]}
        titleChildren="There is a problem"
      />
      <Fieldset
        legend={{
          children: ["What is your address?"],
        }}
      />
      <FileUpload
        id="file-upload-1"
        label={{
          children: ["Upload a file"],
        }}
        name="file-upload-1"
      />
      <Hint>bar</Hint>

      <Input
        id="input-example"
        label={{
          children: ["National Insurance number"],
        }}
        name="test-name"
        type="text"
      />
      <InsetText>
        It can take up to 8 weeks to register a lasting power of attorney if
        there are no mistakes in the application.
      </InsetText>

      <Label>National Insurance number</Label>
      <Panel titleChildren="Application complete">
        Your reference number: HDJ2123F
      </Panel>
      <PhaseBanner
        tag={{
          children: ["alpha"],
        }}
      >
        This is a new service - your
        <a className="govuk-link" href="#">
          feedback
        </a>
        will help us to improve it.
      </PhaseBanner>
      <Radios
        fieldset={{
          legend: {
            children: ["Have you changed your name?"],
          },
        }}
        hint={{
          children: [
            "This includes changing your last name or spelling your name differently.",
          ],
        }}
        idPrefix="example"
        items={[
          {
            children: ["Yes"],
            value: "yes",
          },
          {
            children: ["No"],
            value: "no",
          },
        ]}
        name="example"
        value="no"
      />
      <Select
        id="select-1"
        items={[
          {
            children: ["GOV.UK frontend option 1"],
            value: 1,
          },
          {
            children: ["GOV.UK frontend option 2"],
            value: 2,
          },
          {
            children: ["GOV.UK frontend option 3"],
            disabled: true,
            value: 3,
          },
        ]}
        label={{
          children: ["Label text goes here"],
        }}
        name="select-1"
        defaultValue={2}
      />
      <SkipLink href="#content">Skip to main content</SkipLink>
      <SummaryList
        rows={[
          {
            actions: {
              items: [
                {
                  children: ["Edit"],
                  href: "#",
                  visuallyHiddenText: "name",
                },
                {
                  children: ["Delete"],
                  href: "#",
                  visuallyHiddenText: "name",
                },
              ],
            },
            key: {
              children: ["Name"],
            },
            value: {
              children: ["Firstname Lastname"],
            },
          },
          {
            actions: {
              items: [
                {
                  children: ["Change"],
                  href: "#",
                  visuallyHiddenText: "date of birth",
                },
              ],
            },
            key: {
              children: ["Date of birth"],
            },
            value: {
              children: ["13/08/1980"],
            },
          },
          {
            actions: {
              items: [
                {
                  children: ["Edit"],
                  href: "#",
                  visuallyHiddenText: "contact information",
                },
                {
                  children: ["Change"],
                  href: "#",
                  visuallyHiddenText: "contact information",
                },
              ],
            },
            key: {
              children: ["Contact information"],
            },
            value: {
              children: [
                <p key="0" className="govuk-body">
                  email@email.com
                </p>,
                <p key="1" className="govuk-body">
                  Address line 1<br />
                  Address line 2<br />
                  Address line 3<br />
                  Address line 4<br />
                  Address line 5
                </p>,
              ],
            },
          },
        ]}
      />
      <Table
        rows={[
          [
            {
              children: ["January"],
            },
            {
              children: ["£85"],
              format: "numeric",
            },
            {
              children: ["£95"],
              format: "numeric",
            },
          ],
          [
            {
              children: ["February"],
            },
            {
              children: ["£75"],
              format: "numeric",
            },
            {
              children: ["£55"],
              format: "numeric",
            },
          ],
          [
            {
              children: ["March"],
            },
            {
              children: ["£165"],
              format: "numeric",
            },
            {
              children: ["£125"],
              format: "numeric",
            },
          ],
        ]}
      />
      <Tabs
        items={[
          {
            id: "past-day",
            label: "Past day",
            panel: {
              children: [
                <h2 key="0" className="govuk-heading-l">
                  Past day
                </h2>,
                <table key="1" className="govuk-table">
                  <thead className="govuk-table__head">
                    <tr className="govuk-table__row">
                      <th className="govuk-table__header" scope="col">
                        Case manager
                      </th>
                      <th className="govuk-table__header" scope="col">
                        Cases opened
                      </th>
                      <th className="govuk-table__header" scope="col">
                        Cases closed
                      </th>
                    </tr>
                  </thead>
                  <tbody className="govuk-table__body">
                    <tr className="govuk-table__row">
                      <td className="govuk-table__cell">David Francis</td>
                      <td className="govuk-table__cell">3</td>
                      <td className="govuk-table__cell">0</td>
                    </tr>
                    <tr className="govuk-table__row">
                      <td className="govuk-table__cell">Paul Farmer</td>
                      <td className="govuk-table__cell">1</td>
                      <td className="govuk-table__cell">0</td>
                    </tr>
                    <tr className="govuk-table__row">
                      <td className="govuk-table__cell">Rita Patel</td>
                      <td className="govuk-table__cell">2</td>
                      <td className="govuk-table__cell">0</td>
                    </tr>
                  </tbody>
                </table>,
              ],
            },
          },
          {
            id: "past-week",
            label: "Past week",
            panel: {
              children: [
                <h2 key="0" className="govuk-heading-l">
                  Past week
                </h2>,
                <table key="1" className="govuk-table">
                  <thead className="govuk-table__head">
                    <tr className="govuk-table__row">
                      <th className="govuk-table__header" scope="col">
                        Case manager
                      </th>
                      <th className="govuk-table__header" scope="col">
                        Cases opened
                      </th>
                      <th className="govuk-table__header" scope="col">
                        Cases closed
                      </th>
                    </tr>
                  </thead>
                  <tbody className="govuk-table__body">
                    <tr className="govuk-table__row">
                      <td className="govuk-table__cell">David Francis</td>
                      <td className="govuk-table__cell">24</td>
                      <td className="govuk-table__cell">18</td>
                    </tr>
                    <tr className="govuk-table__row">
                      <td className="govuk-table__cell">Paul Farmer</td>
                      <td className="govuk-table__cell">16</td>
                      <td className="govuk-table__cell">20</td>
                    </tr>
                    <tr className="govuk-table__row">
                      <td className="govuk-table__cell">Rita Patel</td>
                      <td className="govuk-table__cell">24</td>
                      <td className="govuk-table__cell">27</td>
                    </tr>
                  </tbody>
                </table>,
              ],
            },
          },
          {
            id: "past-month",
            label: "Past month",
            panel: {
              children: [
                <h2 key="0" className="govuk-heading-l">
                  Past month
                </h2>,
                <table key="1" className="govuk-table">
                  <thead className="govuk-table__head">
                    <tr className="govuk-table__row">
                      <th className="govuk-table__header" scope="col">
                        Case manager
                      </th>
                      <th className="govuk-table__header" scope="col">
                        Cases opened
                      </th>
                      <th className="govuk-table__header" scope="col">
                        Cases closed
                      </th>
                    </tr>
                  </thead>
                  <tbody className="govuk-table__body">
                    <tr className="govuk-table__row">
                      <td className="govuk-table__cell">David Francis</td>
                      <td className="govuk-table__cell">98</td>
                      <td className="govuk-table__cell">95</td>
                    </tr>
                    <tr className="govuk-table__row">
                      <td className="govuk-table__cell">Paul Farmer</td>
                      <td className="govuk-table__cell">122</td>
                      <td className="govuk-table__cell">131</td>
                    </tr>
                    <tr className="govuk-table__row">
                      <td className="govuk-table__cell">Rita Patel</td>
                      <td className="govuk-table__cell">126</td>
                      <td className="govuk-table__cell">142</td>
                    </tr>
                  </tbody>
                </table>,
              ],
            },
          },
          {
            id: "past-year",
            label: "Past year",
            panel: {
              children: [
                <h2 key="0" className="govuk-heading-l">
                  Past year
                </h2>,
                <table key="1" className="govuk-table">
                  <thead className="govuk-table__head">
                    <tr className="govuk-table__row">
                      <th className="govuk-table__header" scope="col">
                        Case manager
                      </th>
                      <th className="govuk-table__header" scope="col">
                        Cases opened
                      </th>
                      <th className="govuk-table__header" scope="col">
                        Cases closed
                      </th>
                    </tr>
                  </thead>
                  <tbody className="govuk-table__body">
                    <tr className="govuk-table__row">
                      <td className="govuk-table__cell">David Francis</td>
                      <td className="govuk-table__cell">1380</td>
                      <td className="govuk-table__cell">1472</td>
                    </tr>
                    <tr className="govuk-table__row">
                      <td className="govuk-table__cell">Paul Farmer</td>
                      <td className="govuk-table__cell">1129</td>
                      <td className="govuk-table__cell">1083</td>
                    </tr>
                    <tr className="govuk-table__row">
                      <td className="govuk-table__cell">Rita Patel</td>
                      <td className="govuk-table__cell">1539</td>
                      <td className="govuk-table__cell">1265</td>
                    </tr>
                  </tbody>
                </table>,
              ],
            },
          },
        ]}
        title="Contents"
      />
      <Tag>alpha</Tag>
      <Textarea
        hint={{
          children: [
            "Don’t include personal or financial information, eg your National Insurance number or credit card details.",
          ],
        }}
        id="more-detail"
        label={{
          children: ["Can you provide more detail?"],
        }}
        name="more-detail"
      />
      <WarningText iconFallbackText="Warning">
        You can be fined up to £5,000 if you don’t register.
      </WarningText>
    </>
  );
}
