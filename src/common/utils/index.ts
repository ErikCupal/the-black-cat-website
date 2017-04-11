/* tslint:disable:callable-types no-any */
import { combineReducers as _combineReducers } from 'redux'
import { connect as _connect } from 'react-redux'

import { Action } from '../actions'
import { State } from '../types'

/* reducers */

/**
 * A *reducer* (also called a *reducing function*) is a function that accepts
 * an accumulation and a value and returns a new accumulation. They are used
 * to reduce a collection of values down to a single value
 *
 * Reducers are not unique to Redux—they are a fundamental concept in
 * functional programming.  Even most non-functional languages, like
 * JavaScript, have a built-in API for reducing. In JavaScript, it's
 * `Array.prototype.reduce()`.
 *
 * In Redux, the accumulated value is the state object, and the values being
 * accumulated are actions. Reducers calculate a new state given the previous
 * state and an action. They must be *pure functions*—functions that return
 * the exact same output for given inputs. They should also be free of
 * side-effects. This is what enables exciting features like hot reloading and
 * time travel.
 *
 * Reducers are the most important concept in Redux.
 *
 * *Do not put API calls into reducers.*
 *
 * @template S State object type.
 */
type Reducer<S> = <A extends Action>(state: S | undefined, action: A) => S

/**
 * Object whose values correspond to different reducer functions.
 */
type ReducersMapObject<S> = {
  [K in keyof S]: Reducer<S[K]>
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @template S Combined state object type.
 *
 * @param reducers An object whose values correspond to different reducer
 *   functions that need to be combined into one. One handy way to obtain it
 *   is to use ES6 `import * as reducers` syntax. The reducers may never
 *   return undefined for any action. Instead, they should return their
 *   initial state if the state passed to them was undefined, and the current
 *   state for any unrecognized action.
 *
 * @returns A reducer function that invokes every reducer inside the passed
 *   object, and builds a state object with the same shape.
 */
export const combineReducers = <S>(reducers: ReducersMapObject<S>): Reducer<S> => (_combineReducers as any)(reducers)

type Selector<S, P, O> = (state: S, props?: P) => O

interface NarrowedDispatch<S, A> {
  <ACTION extends A>(action: ACTION): ACTION
}

export const connect = <O extends {}>() => (
  <P extends {}, Q extends {}>(
    stateToProps: ((state: State, ownProps: O) => P) | undefined,
    dispatchToProps?: (dispatch: NarrowedDispatch<State, Action>, ownProps: O) => Q
  ) => (
      (component: React.ComponentClass<P & Q & O> | React.StatelessComponent<P & Q & O>)
        : React.ComponentClass<O> =>
        _connect(stateToProps ? stateToProps : () => ({}), dispatchToProps)(component)
    )
)