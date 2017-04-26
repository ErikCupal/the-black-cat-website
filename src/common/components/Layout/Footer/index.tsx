import glamorous from 'glamorous'

const StyledFooter = glamorous.footer({
  backgroundColor: 'rgba(0, 0, 0, 0.8)',

  height: 75,

  display: 'flex',
  flex: '0 0 auto',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
})

const FooterText = glamorous.span({
  color: 'lemonchiffon',
})

const Footer = () => (
  <StyledFooter>
    <FooterText>© 2017 Erik Cupal</FooterText>
  </StyledFooter>
)

export default Footer