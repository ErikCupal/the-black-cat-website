import { TOGGLE_NAVBAR } from '../../../actions'
import { connect } from '../../../store'
import { button, child, div, firstChild, md, sm, transparent } from 'stylish-components'
import { focus, hover } from 'stylish-components/lib'

const StyledNavButton = button<{ pressed?: boolean }>(({ pressed }) => [
  {
    backgroundColor: transparent,
    marginRight: 15,
    border: 0,
    marginLeft: 10,
  },
  hover({
    outline: 'none',
  }),
  focus({
    outline: 'none',
  }),
  sm({
    marginRight: 40,
  }),
  md({
    display: 'none',
  }),

  child(
    {
      width: 26,
      height: 3,
      borderRadius: 1.5,
      backgroundColor: pressed ? '#8a6c2c' : '#b38d3c',
      marginTop: 3,
    },
    sm({
      width: 30,
      marginTop: 4,
    }),
  ),
  firstChild(
    {
      marginTop: 0,
    },
    sm({
      marginTop: 0,
    }),
  ),
])

const IconBar = () => (<div />)

interface Props {
  pressed: boolean,
  onClick: () => void,
}

const NavButton = ({ pressed, onClick }: Props) => (
  <StyledNavButton pressed={pressed} onClick={onClick}>
    <IconBar />
    <IconBar />
    <IconBar />
  </StyledNavButton>
)

export default connect()(
  state => ({ pressed: !state.navbarCollapsed }),
  dispatch => ({ onClick: () => dispatch({ type: TOGGLE_NAVBAR }) }),
)(NavButton)