import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default styled(Link)`
  color: indianred;
  &:active { color: indianred; }
  &:visited { color: indianred; }
  &:hover { color: orange; }
`