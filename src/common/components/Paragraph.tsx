import { md, style } from '../css'
import glamorous from 'glamorous'

export default glamorous.p({
  fontSize: '1.2rem',
  lineHeight: 1.9,
  paddingBottom: 20,
  textAlign: 'center',
  margin: '0 10px',
  [md]: style({ width: 500 })
})