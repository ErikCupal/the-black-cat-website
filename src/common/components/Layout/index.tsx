import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-family: Ubuntu;

  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled.main`
  margin-top: 75px;
  flex: 1;
`

const Layout = ({ children }: React.Props<{}>) => (
  <Wrapper>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </Wrapper>
)

export default Layout