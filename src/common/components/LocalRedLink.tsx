import { Link } from 'react-router-dom'
import { active, extend, hover, indianred, orange, visited } from 'stylish-components'

export default extend(Link)([
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