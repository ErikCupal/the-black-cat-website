import { a, active, extend, hover, indianred, orange, visited } from 'stylish-components'

export default a([
  {
    color: indianred,
  },
  active({
    color: indianred,
  }),
  visited({
    color: indianred,
  }),
  hover({
    color: orange,
  }),
])