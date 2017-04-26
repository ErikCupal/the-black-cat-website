import glamorous from 'glamorous'
import DarkSection from './DarkSection'
import ExternalLink from '../ExternalLink'
import { FormattedMessage } from 'react-intl'

const Image = glamorous.img({
  width: 600,
  maxWidth: '90vw',
  paddingTop: 20,
})

const Download = () => (
  <DarkSection>
    <Image src="images/gameplay.jpg" alt="Gameplay" />
    <h2>
      <ExternalLink href="https://github.com/ErikCupal/the-black-cat-client/releases">
        <FormattedMessage
          id="about.download"
          defaultMessage="Download"
        />
      </ExternalLink> (<FormattedMessage
        id="about.downloadCrossplatform"
        defaultMessage="crossplatform"
      />)
    </h2>
  </DarkSection>
)

export default Download