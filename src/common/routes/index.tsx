import { setupPage, normalize } from 'csstips'
import { style, cssRaw } from 'typestyle'
import { init } from 'stylish-components'
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from '../components/Layout'

import About from '../components/About'
import Rules from '../components/Rules'
import NoMatch from './NoMatch'

init(style)
normalize()
setupPage('#app')

const Routes = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={About} />
      <Redirect from="/about" to="/" />
      <Route path="/rules" component={Rules} />
      <Route path="/*" component={NoMatch} />
    </Switch>
  </Layout>
)

export default Routes