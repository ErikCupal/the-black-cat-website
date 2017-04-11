import styled from 'styled-components'
import DarkSection from './DarkSection'
import ExternalLink from '../ExternalLink'
import { FormattedMessage } from 'react-intl'

const Image = styled.img`
  width: 600px;
  max-width: 90vw;
  padding-top: 20px;
`

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