import { header } from 'stylish-components'
import NavButton from './NavButton'
import Logo from './Logo'
import Navigation from './Navigation'

const StyledHeader = header([
  {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',

    position: 'fixed',
    width: '100%',
    height: 75,

    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
])

const Header = () => (
  <StyledHeader>
    <Logo />
    <NavButton />
    <Navigation />
  </StyledHeader>
)

export default Header