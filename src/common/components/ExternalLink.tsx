import glamorous from 'glamorous'
import { style } from '../css'

export default glamorous.a({
  color: 'indianred',
  ':active': style({ color: 'indianred' }),
  ':visited': style({ color: 'indianred' }),
  ':hover': style({ color: 'orange' }),
})