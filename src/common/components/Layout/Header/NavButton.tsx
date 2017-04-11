import { TOGGLE_NAVBAR } from '../../../actions'
import { connect } from '../../../store'
import { sm, md } from '../../../utils/css'
import styled from 'styled-components'

const StyledNavButton = styled.button`
  background-color: transparent;
  margin-right: 15px;
  border: 0;
  margin-left: 10px;
  &:hover { outline: none; }
  &:focus { outline: none; }
  ${sm`margin-right: 40px;`}
  ${md`display: none;`}
`

interface IconBarProps {
  first?: boolean,
  pressed?: boolean,
}

const IconBar = styled.div`
  width: 26px;
  height: 3px;
  border-radius: 1.5px;
  background-color: ${(props: IconBarProps) => props.pressed ? '#8a6c2c' : '#b38d3c'};
  margin-top: ${(props: IconBarProps) => props.first ? '0' : '3px'};

  ${sm`
    width: 30px;
    margin-top: ${(props: IconBarProps) => props.first ? '0' : '4px'};
    `}
`

interface Props {
  pressed: boolean,
  onClick: () => void,
}

const NavButton = ({ pressed, onClick }: Props) => (
  <StyledNavButton onClick={onClick}>
    <IconBar pressed={pressed} first/>
    <IconBar pressed={pressed}/>
    <IconBar pressed={pressed}/>
  </StyledNavButton>
)

export default connect()(
  state => ({ pressed: !state.navbarCollapsed }),
  dispatch => ({ onClick: () => dispatch({ type: TOGGLE_NAVBAR }) }),
)(NavButton)