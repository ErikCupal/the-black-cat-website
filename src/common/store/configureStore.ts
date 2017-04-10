/* tslint:disable:no-var-requires no-any */
import { createStore, Reducer, applyMiddleware } from 'redux'
const { composeWithDevTools } = require('redux-devtools-extension')
const { connectRouter, routerMiddleware } = require('connected-react-router')

import { createBrowserHistory, History } from 'history'
import reducers from '../reducers'
import { State } from '../types/index'

declare const module: { hot: any }

const configureStore = (preloadedState?: State, isClient = false) => {
  
  const history: History = isClient
    ? createBrowserHistory()
    : undefined as any

  const finalReducer = isClient
    ? connectRouter(history)(reducers)
    : reducers

  const finalEnhancer = isClient
    ? composeWithDevTools(
      applyMiddleware(
        ...(isClient ? [routerMiddleware(history)] : []),
      ),
    )
    : undefined

  const store = !!preloadedState
    ? createStore<State>(finalReducer, preloadedState, finalEnhancer)
    : createStore<State>(finalReducer, finalEnhancer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return { store, history }
}

export default configureStore