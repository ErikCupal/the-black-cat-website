import LightSection from './LightSection'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

const Heading = styled.h1`
  font-size: 2.5em;
  line-height: 1.5em;
  text-align: center;
`

const Intro = () => (
  <LightSection style={{ height: 200 }}>
    <Heading>
      <FormattedMessage
        id="about.introMessage"
        defaultMessage="Online multiplayer card game 🃏"
      />
    </Heading>
  </LightSection>
)

export default Intro