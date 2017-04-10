import { a, active, darkslategray, floralwhite, hover, img, lightblue, visited } from 'stylish-components/lib'
import { extend } from 'stylish-components'
import Section from './Section'
import Link from '../RedLink'

const StyledSection = extend(Section)([{
  backgroundColor: '#222727',
  color: floralwhite,
}])

const Image = img([{
  width: 600,
  maxWidth: '90vw',
  paddingTop: 20,
}])

const Download = () => (
  <StyledSection>
    <Image src="images/gameplay.jpg" alt="Gameplay"/>
    <h2><Link href="https://github.com/ErikCupal/the-black-cat-client/releases">Download</Link> (crossplatform)</h2>
  </StyledSection>
)

export default Download