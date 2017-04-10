import { h2 } from 'stylish-components'
import { style } from 'typestyle'

export default h2([{
  fontSize: '2em',
  lineHeight: '1.4em',
  textAlign: 'center',
  color: 'red',
}])

/*const className = style({
  fontSize: '2em',
  lineHeight: '1.4em',
  textAlign: 'center',
  color: 'red',
})

export default (children?: any, ...args: any[]) => (
  <h2 className={className}>
    {children}
  </h2>
)*/