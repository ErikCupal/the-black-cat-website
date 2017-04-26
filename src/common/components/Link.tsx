import { Link } from 'react-router-dom'
import glamorous from 'glamorous'
import { style } from '../css/index'

export default glamorous(Link)({
  color: 'indianred',
  ':active': style({ color: 'indianred' }),
  ':visited': style({ color: 'indianred' }),
  ':hover': style({ color: 'orange' }),
})