import {
  Breadcrumbs,
  Hint
} from 'govuk-react-jsx';

export default function Home() {
  return (
    <>
      <Hint>bar</Hint>
      
      <Breadcrumbs
        items={[
          {
            children: [
              'Section'
            ],
            href: '/foo'
          },
          {
            children: [
              'Sub-section'
            ],
            href: '/bar'
          }
        ]}
       />
    </>
  )
}


