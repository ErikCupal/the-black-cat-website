import DarkSection from './DarkSection'
import LightHeadingTwo from '../LightHeadingTwo'
import BigText from '../BigText'
import ExternalLink from '../ExternalLink'
import { FormattedMessage } from 'react-intl'

const InstallOnServer = () => (
  <DarkSection>
    <LightHeadingTwo>
      <FormattedMessage
        id="about.installOnServer"
        defaultMessage="How to install it on my own server?"
      />
    </LightHeadingTwo>
    <BigText>
      <FormattedMessage
        id="about.readThe"
        defaultMessage="Read the"
      /> <ExternalLink href="https://github.com/ErikCupal/the-black-cat-server#install-on-own-server">
        <FormattedMessage
          id="about.installInstructions"
          defaultMessage="install instructions"
        />
      </ExternalLink>
    </BigText>
  </DarkSection>
)

export default InstallOnServer