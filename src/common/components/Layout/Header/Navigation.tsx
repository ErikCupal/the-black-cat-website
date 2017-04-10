import { a } from 'stylish-components/lib'
import { connect } from '../../../store'
import { Link } from 'react-router-dom'
import { extend, black, floralwhite, lightslategrey, md, nav, CSS } from 'stylish-components'

const linkStyle: CSS[] = [
  {
    textTransform: 'uppercase',
    padding: 0,
    lineHeight: 1.5,
    fontSize: 20,
    color: floralwhite,
    textDecoration: 'none',
    fontWeight: 600,
  },
  md({
    marginRight: 20,
    color: floralwhite,
  }),
]

const NavLink = extend(Link)(linkStyle)
const NavLinkExternal = a(linkStyle)

interface Props {
  collapsed?: boolean
}

const StyledNav = nav<Props>(({ collapsed }) => [
  {
    backgroundColor: 'rgba(21, 21, 20, 0.8)',
    padding: 10,
    paddingRight: 30,
    textAlign: 'right',

    display: collapsed ? 'none' : 'flex',
    width: '100%',
    flexDirection: 'column',
    flexBasis: '100%',
  },
  md({
    backgroundColor: 'initial',
    padding: 0,

    display: 'flex',
    width: 'auto',
    flexDirection: 'row',
    flexBasis: 'auto',
    alignItems: 'center',
    marginRight: '30px',
  }),
])

const Navigation = ({ collapsed }: Props) => (
  <StyledNav collapsed={collapsed}>
    <NavLink to="/">About</NavLink>
    <NavLink to="/rules">Rules</NavLink>
    <NavLinkExternal
      href="//github.com/ErikCupal/the-black-cat-client"
      target="_blank">
      Github
    </NavLinkExternal>
  </StyledNav>
)

export default connect()(
  state => ({ collapsed: state.navbarCollapsed }),
)(Navigation)