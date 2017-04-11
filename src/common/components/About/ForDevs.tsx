import LightSection from './LightSection'
import DarkHeadingTwo from '../DarkHeadingTwo'
import DarkHeadingThree from '../DarkHeadingThree'
import ExternalLink from '../ExternalLink'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

const BigLink = styled(ExternalLink) `
  font-size: 1.3em;
  line-height: 1em;
  padding: 0 10px;
`

const GithubRepos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DocCodeLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`

const ForDevs = () => (
  <LightSection>
    <DarkHeadingTwo>
      <FormattedMessage
        id="about.forDevs"
        defaultMessage="For devs"
      /> 😎🤓
    </DarkHeadingTwo>
    <DarkHeadingThree>
      <FormattedMessage
        id="about.experimentOrContribute"
        defaultMessage="How to experiment or contribute?"
      />
    </DarkHeadingThree>
    <span style={{ textAlign: 'center', fontSize: '1.2rem' }}>
      <FormattedMessage
        id="about.takeALook"
        defaultMessage="Take a look at the repos on Github and read instructions there"
      />
    </span>
    <span style={{ fontSize: '1.8rem', marginTop: '1.2rem' }}>👇</span>
    <DarkHeadingThree>
      <FormattedMessage
        id="about.githubRepos"
        defaultMessage="Github repos"
      />
    </DarkHeadingThree>
    <GithubRepos>
      <BigLink href="//github.com/ErikCupal/the-black-cat-client" target="_blank">
        <FormattedMessage
          id="about.client"
          defaultMessage="Client"
        />
      </BigLink>
      <BigLink href="//github.com/ErikCupal/the-black-cat-server" target="_blank">
        <FormattedMessage
          id="about.server"
          defaultMessage="Server"
        />
      </BigLink>
    </GithubRepos>
    <DarkHeadingThree>
      <FormattedMessage
        id="about.codeDocumentation"
        defaultMessage="Code documentation"
      />
    </DarkHeadingThree>
    <DocCodeLinks>
      <BigLink href="doc/server/" target="_blank">
        <FormattedMessage
          id="about.server"
          defaultMessage="Server"
        />
      </BigLink>
      <BigLink href="doc/client/core/" target="_blank">
        <FormattedMessage
          id="about.clientCore"
          defaultMessage="Client core"
        />
      </BigLink>
      <BigLink href="doc/client/desktop/" target="_blank">
        <FormattedMessage
          id="about.clientLauncher"
          defaultMessage="Client launcher"
        />
      </BigLink>
    </DocCodeLinks>
  </LightSection>
)

export default ForDevs