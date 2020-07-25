import { createStore, combineReducers, applyMiddleware } from 'redux'
import pokemon, { PokemonState, PokemonActionsTypes } from './reducers/pokemon'
import loading, { LoadingActionTypes, LoadingState } from './reducers/loading'
import selectedPokemon, { SelectedPokemonState, SelectedPokemonActionTypes } from './reducers/selectedPokemon'
import thunk, { ThunkMiddleware } from 'redux-thunk'

export interface State {
  pokemon: PokemonState,
  loading: LoadingState,
  selectedPokemon: SelectedPokemonState
}

export type StateActionTypes =
  PokemonActionsTypes | LoadingActionTypes | SelectedPokemonActionTypes

const store = createStore<State, StateActionTypes, {}, {}>(
  combineReducers({ pokemon, loading, selectedPokemon }),
  applyMiddleware(thunk as ThunkMiddleware<State, StateActionTypes>)
)

export default store
