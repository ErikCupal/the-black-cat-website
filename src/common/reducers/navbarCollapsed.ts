import { TOGGLE_NAVBAR } from '../actions'
import { Action } from '../actions'

const navbarCollapsed = (state: boolean = true, action: Action) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return !state
    default:
      return state
  }
}

export default navbarCollapsed