import { extend } from 'stylish-components'
import {
  a,
  active,
  floralwhite,
  h2,
  h3,
  hover,
  indianred,
  li,
  lightblue,
  orange,
  ul,
  visited
} from 'stylish-components/lib'
import Section from './Section'
import Link from '../RedLink'

const StyledSection = extend(Section)([{
  // height: 200,
}])

const Heading = h2([{
  fontSize: '2em',
  lineHeight: '1.4em',
  textAlign: 'center',
  marginBottom: 0,
}])

const SubHeading = h3([{
  fontSize: '1.8em',
  lineHeight: '1.2em',
  textAlign: 'center',
}])

const Item = li([{
  listStyleType: 'none',
  lineHeight: '2rem',
  fontSize: '1.2rem',
}])

const Servers = () => (
  <StyledSection>
    <Heading>Official active servers</Heading>
    <SubHeading>🔥 Still under hot development 🔥</SubHeading>
    <ul>
      <Item><Link href="//sr1.theblackcat.club">https://sr1.theblackcat.club</Link></Item>
      <Item><Link href="//sr2.theblackcat.club">https://sr2.theblackcat.club</Link></Item>
      <Item><Link href="//sr3.theblackcat.club">https://sr3.theblackcat.club</Link></Item>
      <Item><Link href="//sr4.theblackcat.club">https://sr4.theblackcat.club</Link></Item>
    </ul>
  </StyledSection>
)

export default Servers