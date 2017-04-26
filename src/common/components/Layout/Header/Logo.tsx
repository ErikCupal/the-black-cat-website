import { md, sm, style } from '../../../css'
import { Link } from 'react-router-dom'
import glamorous from 'glamorous'

const Wrapper = glamorous.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 63,
  fontSize: 30,
  color: 'floralwhite',
  height: 75,
  [sm]: style({
    marginLeft: 92,
  }),
  [md]: style({
    justifyContent: 'flex-start',
    marginLeft: '5%',
  }),
})

const LogoLink = glamorous(Link)({
  textDecoration: 'none',
  color: 'white',
})

const Logo = () => (
  <Wrapper>
    <LogoLink to="/">The Black Cat</LogoLink>
  </Wrapper>
)

export default Logo