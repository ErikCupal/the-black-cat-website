import Section from './Section'
import Intro from './Intro'
import Download from './Download'
import Servers from './Servers'
import AboutGame from './AboutGame'
import HowToPlay from './HowToPlay'
import InstallOnServer from './InstallOnServer'
import ForDevs from './ForDevs'
import { Helmet } from 'react-helmet'

const About = () => (
  <div>
    <Helmet>
      <title>The Black Cat - Online multiplayer card game</title>
      <link rel="icon" sizes="512x512" href="/images/favicon/favicon-512.png" />
      <link rel="icon" sizes="192x192" href="/images/favicon/favicon-192.png" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/images/favicon/favicon-144.png" />
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images/favicon/favicon-114.png" />
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images/favicon/favicon-72.png" />
      <link rel="apple-touch-icon-precomposed" href="/images/favicon/favicon-57.png" />
      <link rel="shortcut icon" href="/images/favicon/favicon-32.png" />
    </Helmet>
    <Intro />
    <Download />
    <Servers />
    <AboutGame />
    <HowToPlay />
    <InstallOnServer />
    <ForDevs />
  </div>
)

export default About