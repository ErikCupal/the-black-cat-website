import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { div, main } from 'stylish-components'

const Wrapper = div([{
  fontFamily: 'Ubuntu',

  display: 'flex',
  flexDirection: 'column',

  height: '100%',
}])

const Main = main([{
  marginTop: 75,
  flex: 1,
}])

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