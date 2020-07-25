import { createStore, combineReducers, applyMiddleware } from 'redux'
import pokemon, { PokemonState, PokemonActionsTypes } from './reducers/pokemon'
import loading, { LoadingActionTypes, LoadingState } from './reducers/loading'
import thunk, { ThunkMiddleware } from 'redux-thunk'

export interface State {
  pokemon: PokemonState,
  loading: LoadingState
}

export type StateActionTypes =
  PokemonActionsTypes | LoadingActionTypes

const store = createStore<State, StateActionTypes, {}, {}>(
  combineReducers({ pokemon, loading }),
  applyMiddleware(thunk as ThunkMiddleware<State, StateActionTypes>)
)

export default store
