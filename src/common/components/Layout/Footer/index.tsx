import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: rgba(0, 0, 0, 0.8);

  height: 75px;

  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const FooterText = styled.span`
  color: lemonchiffon;
`

const Footer = () => (
  <StyledFooter>
    <FooterText>© 2017 Erik Cupal</FooterText>
  </StyledFooter>
)

export default Footer