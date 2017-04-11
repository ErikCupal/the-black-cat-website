import LightSection from './LightSection'
import DarkHeadingTwo from '../DarkHeadingTwo'
import DarkHeadingThree from '../DarkHeadingThree'
import ExternalLink from '../ExternalLink'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

const ListItem = styled.li`
  list-style-type: none;
  line-height: 2rem;
  font-size: 1.2rem;
`

const Servers = () => (
  <LightSection>
    <DarkHeadingTwo>
      <FormattedMessage
        id="about.officialServers"
        defaultMessage="Official active servers"
      />
    </DarkHeadingTwo>
    <DarkHeadingThree>
      <FormattedMessage
        id="about.serversHotDevelopment"
        defaultMessage="🔥 Still under hot development 🔥"
      />
    </DarkHeadingThree>
    <ul style={{ padding: 0 }}>
      <ListItem><ExternalLink href="//sr1.theblackcat.club">
        https://sr1.theblackcat.club
      </ExternalLink></ListItem>
      <ListItem><ExternalLink href="//sr2.theblackcat.club">
        https://sr2.theblackcat.club
      </ExternalLink></ListItem>
      <ListItem><ExternalLink href="//sr3.theblackcat.club">
        https://sr3.theblackcat.club
      </ExternalLink></ListItem>
      <ListItem><ExternalLink href="//sr4.theblackcat.club">
        https://sr4.theblackcat.club
      </ExternalLink></ListItem>
    </ul>
  </LightSection>
)

export default Servers