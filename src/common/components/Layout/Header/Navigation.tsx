// tslint:disable:no-any
import { TOGGLE_NAVBAR } from '../../../actions'
import { md, style, css } from '../../../css'
import { connect } from '../../../store'
import { Link } from 'react-router-dom'
import glamorous from 'glamorous'
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

const linkStyle = style({
  textTransform: 'uppercase',
  padding: 0,
  lineHeight: 1.5,
  fontSize: 20,
  color: 'floralWhite',
  textDecoration: 'none',
  fontWeight: 600,

  [md]: style({
    marginRight: 20,
  })
})

const NavLink = glamorous(Link)(linkStyle)
const NavLinkExternal = glamorous.a(linkStyle)

const StyledNav = glamorous.nav<{collapsed?: boolean}>(
  {
    backgroundColor: 'rgba(21, 21, 20, 0.8)',
    padding: 10,
    paddingRight: 30,
    textAlign: 'right',

    width: '100%',
    flexDirection: 'column',
    flexBasis: '100%',

    [md]: style({
      backgroundColor: 'initial',
      padding: 0,

      display: 'flex',
      width: 'auto',
      flexDirection: 'row',
      flexBasis: 'auto',
      alignItems: 'center',
      marginRight: 30,
    })
  },
  props => ({
    display: props.collapsed ? 'none' : 'flex',
  })
)

const returnAs = <R, T>(value: T) => (value as any) as R

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