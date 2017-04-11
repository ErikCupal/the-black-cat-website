/* tslint:disable: no-any */
import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import cs from 'react-intl/locale-data/cs'
declare const module: { hot: any }

import configureStore from '../common/store/configureStore'
import { State } from '../common/types'
import App from './App'

const preloadedState: State = (window as any).__PRELOADED_STATE__
const messages: { [key: string]: string} = (window as any).translatedMessages
const locale: string = (window as any).appLocale
const { store, history } = configureStore(preloadedState, true)

addLocaleData(cs)

const render = (Component: typeof App) => {
  ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
      <Provider store={store}>
        <AppContainer>
          <Component history={history} />
        </AppContainer>
      </Provider>
    </IntlProvider>,
    document.getElementById('app'),
  )
}

// Initial render
render(App)

// Hot reloading
if (module && module.hot) {
  // Component hot realoading
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default
    render(NewApp)
  })
}