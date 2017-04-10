import { extend } from 'stylish-components'
import {
  a,
  active,
  darkslategray,
  floralwhite,
  h2,
  h3,
  hover,
  indianred,
  li,
  lightblue,
  orange,
  p,
  ul,
  visited,
  span,
  md,
  lemonchiffon
} from 'stylish-components/lib'
import Section from './Section'
import Heading from '../LemonHeadingTwo'

const StyledSection = extend(Section)([
  {
    backgroundColor: '#222727',
  },
  md({
    padding: '0 100px',
  })
])

const Paragraph = span([
  {
    color: floralwhite,
    fontSize: '1.2rem',
    lineHeight: '1.9rem',
    paddingBottom: 20,
    textAlign: 'center',
    margin: '0 10px',
  },
  md({
    width: 500,
  })
])

const AboutGame = () => (
  <StyledSection>
    <Heading>About the game</Heading>
    <Paragraph>
      The Black Cat is a trick-taking playing card game for four players.
      It is a variant of Hearts.
      You can play the game online with your friends or against bots 🤖🤖🤖.
    </Paragraph>
  </StyledSection>
)

export default AboutGame