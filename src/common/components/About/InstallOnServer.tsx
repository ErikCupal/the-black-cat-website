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
import { NavLink } from 'react-router-dom'
import Heading from '../LemonHeadingTwo'

const StyledSection = extend(Section)([{
  backgroundColor: '#222727',
  color: floralwhite,
}])

// const Heading = h2([{
//   fontSize: '2em',
//   lineHeight: '1.4em',
//   textAlign: 'center',
//   marginBottom: 0,
//   color: '#f4f4c4',
// }])

const SubHeading = h3([{
  fontSize: '1.8em',
  lineHeight: '1.2em',
  textAlign: 'center',
}])

const Link = a([
  {
    color: indianred,
  },
  active({
    color: indianred,
  }),
  visited({
    color: indianred,
  }),
  hover({
    color: orange,
  }),
])

const InstallOnServer = () => (
  <StyledSection>
    <Heading>How to install it on my own server?</Heading>
    <SubHeading>
      Read the <Link href="https://github.com/ErikCupal/the-black-cat-server#install-on-own-server">
        install instructions
      </Link>
    </SubHeading>
  </StyledSection>
)

export default InstallOnServer