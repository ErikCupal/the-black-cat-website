// tslint:disable:max-line-length
import DarkSection from './DarkSection'
import LightHeadingTwo from '../LightHeadingTwo'
import Paragraph from '../Paragraph'
import { FormattedMessage } from 'react-intl'

const AboutGame = () => (
  <DarkSection>
    <LightHeadingTwo>
      <FormattedMessage
        id="about.aboutGame"
        defaultMessage="About the game"
      />
    </LightHeadingTwo>
    <Paragraph>
      <FormattedMessage
        id="about.aboutGameText"
        defaultMessage="The Black Cat is a trick-taking playing card game for four players. It is a variant of Hearts. You can play the game online with your friends or against bots 🤖🤖🤖."
      />
    </Paragraph>
  </DarkSection>
)

export default AboutGame