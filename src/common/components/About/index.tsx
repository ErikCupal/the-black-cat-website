import Intro from './Intro'
import Download from './Download'
import Servers from './Servers'
import AboutGame from './AboutGame'
import HowToPlay from './HowToPlay'
import InstallOnServer from './InstallOnServer'
import ForDevs from './ForDevs'
import { Helmet } from 'react-helmet'
import { FormattedMessage, defineMessages, addLocaleData } from 'react-intl'

const About = () => (
  <div>
    <Helmet>
      <title>The Black Cat - Online multiplayer card game</title>
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