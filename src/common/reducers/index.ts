import navbarCollapsed from './navbarCollapsed'
import { State } from '../types'
import { combineReducers } from '../utils'

import { routerReducer, RouterState } from 'react-router-redux'

const reducers = combineReducers<State>({
  navbarCollapsed,
})

export default reducers