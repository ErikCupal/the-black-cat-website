import { extend } from 'stylish-components'
import {
  a,
  active,
  div,
  floralwhite,
  h2,
  h3,
  h4,
  hover,
  indianred,
  li,
  lightblue,
  orange,
  ul,
  visited
} from 'stylish-components/lib'
import Section from './Section'
import { NavLink } from 'react-router-dom'

const StyledSection = extend(Section)([{
  // height: 200,
}])

const Heading = h2([{
  fontSize: '2em',
  lineHeight: '1.4em',
  textAlign: 'center',
  marginBottom: 0,
}])

const SubHeading = h3([{
  fontSize: '1.6em',
  lineHeight: '1.2em',
  textAlign: 'center',
}])

const GithubRepo = a([
  {
    fontSize: '1.3em',
    lineHeight: '1em',
    textAlign: 'center',
    padding: '0 10px',
    color: indianred,
  },
  active({
    color: indianred,
  }),
  visited({
    color: indianred,
  }),
  hover({
    color: orange,
  }),
])

const GithubRepos = div([{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}])

const CodeDocLinks = div([{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 30,
}])

const StyledLink = extend(NavLink)([
  {
    fontSize: '1.3em',
    lineHeight: '1em',
    textAlign: 'center',
    padding: '0 10px',
    color: indianred,
  },
  active({
    color: indianred,
  }),
  visited({
    color: indianred,
  }),
  hover({
    color: orange,
  }),
])

const Link = a([
  {
    color: indianred,
  },
  active({
    color: indianred,
  }),
  visited({
    color: indianred,
  }),
  hover({
    color: orange,
  }),
])

const ForDevs = () => (
  <StyledSection>
    <Heading>For devs 😎🤓</Heading>
    <SubHeading>How to experiment or contribute?</SubHeading>
    <span
      style={{ textAlign: 'center', fontSize: '1.2rem' }}
    >
      Take a look at the repos on Github and read instructions there
    </span>
    <br />
    <span style={{ fontSize: '1.8rem' }}>👇</span>
    <SubHeading>Github repos</SubHeading>
    <GithubRepos>
      <GithubRepo href="//github.com/ErikCupal/the-black-cat-client" target="_blank">Client</GithubRepo>
      <GithubRepo href="//github.com/ErikCupal/the-black-cat-server" target="_blank">Server</GithubRepo>
    </GithubRepos>
    <SubHeading>Code documentation</SubHeading>
    <CodeDocLinks>
      <GithubRepo href="doc/server/" target="_blank">Server</GithubRepo>
      <GithubRepo href="doc/client/core/" target="_blank">Client core</GithubRepo>
      <GithubRepo href="doc/client/desktop/" target="_blank">Client launcher</GithubRepo>
    </CodeDocLinks>
  </StyledSection>
)

export default ForDevs