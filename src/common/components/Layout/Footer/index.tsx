import { bisque, span } from 'stylish-components/lib'
import { footer } from 'stylish-components'

const StyledFooter = footer([
  {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',

    height: 75,

    display: 'flex',
    flex: '0 0 auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
])

const FooterText = span([{
  color: bisque,
}])

const Footer = () => (
  <StyledFooter>
    <FooterText>© 2017 Erik Cupal</FooterText>
  </StyledFooter>
)

export default Footer