import { TOGGLE_NAVBAR } from '../../../actions'
import { connect } from '../../../store'
import { sm, md, style } from '../../../css'
import glamorous from 'glamorous'

const StyledNavButton = glamorous.button({
  backgroundColor: 'transparent',
  marginRight: 15,
  border: 0,
  marginLeft: 10,
  ':hover': style({ outline: 'none' }),
  ':focus': style({ outline: 'none' }),
  [sm]: style({ marginRight: 40 }),
  [md]: style({ display: 'none' }),
})

const IconBar = glamorous.div<{ pressed?: boolean, first?: boolean }>(
  {
    width: 26,
    height: 3,
    borderRadius: 1.5,
    [sm]: style({ width: 30 })
  },
  props => ({
    backgroundColor: props.pressed ? '#8a6c2c' : '#b38d3c',
    marginTop: props.first ? 0 : 3,
    [sm]: style({ marginTop: props.first ? 0 : 4 }),
  }),
)

interface Props {
  pressed: boolean,
  onClick: () => void,
}

const NavButton = ({ pressed, onClick }: Props) => (
  <StyledNavButton onClick={onClick}>
    <IconBar pressed={pressed} first />
    <IconBar pressed={pressed} />
    <IconBar pressed={pressed} />
  </StyledNavButton>
)

export default connect()(
  state => ({ pressed: !state.navbarCollapsed }),
  dispatch => ({ onClick: () => dispatch({ type: TOGGLE_NAVBAR }) }),
)(NavButton)