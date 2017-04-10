/* tslint:disable: no-any */
import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { setStylesTarget } from 'typestyle'
declare const module: { hot: any }

import configureStore from '../common/store/configureStore'
import { State } from '../common/types'
import App from './App'

const preloadedState: State = (window as any).__PRELOADED_STATE__
const { store, history } = configureStore(preloadedState, true)

const render = (Component: typeof App) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component history={history} />
      </AppContainer>
    </Provider>,
    document.getElementById('app'),
  )
}

// Initial render

setStylesTarget(document.getElementById('styles-target') as any)
render(App)

// Hot reloading
if (module && module.hot) {
  // Component hot realoading
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default
    render(NewApp)
  })
}