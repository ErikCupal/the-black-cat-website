import Link from '../Link'
import LightSection from './LightSection'
import DarkHeadingTwo from '../DarkHeadingTwo'
import BigText from '../BigText'
import { FormattedMessage } from 'react-intl'

const HowToPlay = () => (
  <LightSection>
    <DarkHeadingTwo>
      <FormattedMessage
        id="about.howToPlay"
        defaultMessage="How to play"
      />
    </DarkHeadingTwo>
    <BigText>
      <FormattedMessage
        id="about.readThe"
        defaultMessage="Read the"
      /> <Link to="/rules">
        <FormattedMessage
          id="about.rules"
          defaultMessage="rules"
        />
      </Link>
    </BigText>
  </LightSection>
)

export default HowToPlay