import NavButton from './NavButton'
import Logo from './Logo'
import Navigation from './Navigation'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: rgba(0, 0, 0, 0.8);

  position: fixed;
  width: 100%;
  height: 75px;

  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`

const Header = () => (
  <StyledHeader>
    <Logo />
    <NavButton />
    <Navigation />
  </StyledHeader>
)

export default Header