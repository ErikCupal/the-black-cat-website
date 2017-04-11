// tslint:disable:no-any
import { TOGGLE_NAVBAR } from '../../../actions'
import { md } from '../../../utils/css'
import { connect } from '../../../store'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { InjectedIntl, defineMessages, injectIntl } from 'react-intl'

const messages = defineMessages({
  navAbout: {
    id: 'nav.about',
    defaultMessage: 'About',
  },
  navRules: {
    id: 'nav.rules',
    defaultMessage: 'Rules',
  },
})

const linkStyle = css`
  text-transform: uppercase;
  padding: 0;
  line-height: 1.5;
  font-size: 20px;
  color: floralwhite;
  text-decoration: none;
  font-weight: 600;
  
  ${md`margin-right: 20px;`}
`

const NavLink = styled(Link) `${linkStyle}`
const NavLinkExternal = styled.a`${linkStyle}`

interface StyledNavProps {
  collapsed?: boolean
}

const StyledNav = styled.nav`
  background-color: rgba(21, 21, 20, 0.8);
  padding: 10px;
  padding-right: 30px;
  text-align: right;

  display: ${(props: StyledNavProps) => props.collapsed ? 'none' : 'flex'};
  width: 100%;
  flex-direction: column;
  flex-basis: 100%;

  ${md`
    background-color: initial;
    padding: 0;

    display: flex;
    width: auto;
    flex-direction: row;
    flex-basis: auto;
    align-items: center;
    margin-right: 30px;
  `}
`

interface NavigationProps {
  collapsed?: boolean
  toggleNavbar: () => void
}

const Navigation = ({ collapsed, toggleNavbar, intl }: NavigationProps & { intl: InjectedIntl }) => (
  <StyledNav collapsed={collapsed}>
    <NavLink onClick={toggleNavbar} to="/">{intl.formatMessage(messages.navAbout)}</NavLink>
    <NavLink onClick={toggleNavbar} to="/rules">{intl.formatMessage(messages.navRules)}</NavLink>
    <NavLinkExternal
      onClick={toggleNavbar}
      href="//github.com/ErikCupal/the-black-cat-client"
      target="_blank">
      Github
    </NavLinkExternal>
  </StyledNav>
)

export default connect()(
  state => ({ collapsed: state.navbarCollapsed }),
  dispatch => ({ toggleNavbar: () => dispatch({ type: TOGGLE_NAVBAR }) }),
)(injectIntl(Navigation) as any)