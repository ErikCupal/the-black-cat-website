import { floralwhite } from 'stylish-components/lib'
import { div, sm, md, darkslategray } from 'stylish-components'

const Wrapper = div([
  {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '63px',
    fontSize: 30,
    color: floralwhite,
    height: 75,
  },
  sm({
    marginLeft: '92px',
  }),
  md({
    justifyContent: 'flex-start',
    marginLeft: '5%',
  }),
])

const Logo = () => (
  <Wrapper>
    The Black Cat
  </Wrapper>
)

export default Logo