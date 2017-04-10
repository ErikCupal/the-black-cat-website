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
import {NavLink} from 'react-router-dom'

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

const Link = extend(NavLink)([
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

const HowToPlay = () => (
  <StyledSection>
    <Heading>How to play</Heading>
    <SubHeading>Read the <Link to="rules">rules</Link></SubHeading>
  </StyledSection>
)

export default HowToPlay