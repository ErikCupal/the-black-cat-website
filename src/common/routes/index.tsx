// tslint:disable:no-any
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from '../components/Layout'

import About from '../components/About'
import Rules from '../components/Rules'
import NoMatch from './NoMatch'
import { Helmet } from 'react-helmet'
import { InjectedIntl, defineMessages, injectIntl } from 'react-intl'

const messages = defineMessages({
  rootTitle: {
    id: 'root.title',
    defaultMessage: 'The Black Cat - Online multiplayer card game',
  },
})

const Routes = ({ intl }: { intl: InjectedIntl }) => (
  <Layout>
    <Helmet>
      <title>{intl.formatMessage(messages.rootTitle)}</title>
      <link rel="icon" sizes="512x512" href="/images/favicon/favicon-512.png" />
      <link rel="icon" sizes="192x192" href="/images/favicon/favicon-192.png" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/images/favicon/favicon-144.png" />
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images/favicon/favicon-114.png" />
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images/favicon/favicon-72.png" />
      <link rel="apple-touch-icon-precomposed" href="/images/favicon/favicon-57.png" />
      <link rel="shortcut icon" href="/images/favicon/favicon-32.png" />
    </Helmet>
    <Switch>
      <Route path="/" exact component={About} />
      <Redirect from="/about" to="/" />
      <Route path="/rules" component={Rules as any} />
      <Route path="/*" component={NoMatch} />
    </Switch>
  </Layout>
)

export default injectIntl(Routes) as React.ComponentClass<{}>