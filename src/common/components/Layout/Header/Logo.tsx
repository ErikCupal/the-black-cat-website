import { md, sm } from '../../../utils/css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 63px;
  font-size: 30px;
  color: floralwhite;
  height: 75px;
  ${sm`
    margin-left: 92px;
    `}
  ${md`
    justify-content: flex-start;
    margin-left: 5%;
    `}
`

const LogoLink = styled(Link)`
  text-decoration: none;
  color: White;
`

const Logo = () => (
  <Wrapper>
    <LogoLink to="/">The Black Cat</LogoLink>
  </Wrapper>
)

export default Logo