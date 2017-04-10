/* tslint:disable:class-name */

// Action

export type Action =

  | TOGGLE_NAVBAR
  | FETCH_RULES

// Action types

export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR'
export const FETCH_RULES = 'FETCH_RULES'

export interface TOGGLE_NAVBAR { type: typeof TOGGLE_NAVBAR }
export interface FETCH_RULES { type: typeof FETCH_RULES }