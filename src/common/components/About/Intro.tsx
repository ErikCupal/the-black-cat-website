import { h1 } from 'stylish-components/lib'
import { extend } from 'stylish-components'
import Section from './Section'

const StyledSection = extend(Section)([{
  height: 200,
}])

const Heading = h1([{
  fontSize: '2.5em',
  lineHeight: '1.5em',
  textAlign: 'center',
}])

const Intro = () => (
  <StyledSection>
    <Heading>Online multiplayer card game 🃏</Heading>
  </StyledSection>
)

export default Intro