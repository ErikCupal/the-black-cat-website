import LightSection from './LightSection'
import glamorous from 'glamorous'
import { FormattedMessage } from 'react-intl'

const Heading = glamorous.h1({
  fontSize: '2.5rem',
  lineHeight: 1.5,
  textAlign: 'center',
})

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