import { createStore, combineReducers, applyMiddleware } from 'redux'
import pokemon, { PokemonState, PokemonActionsTypes } from './reducers/pokemon'
import thunk, { ThunkMiddleware } from 'redux-thunk'

export interface State {
    pokemon: PokemonState
}

const store = createStore<State, PokemonActionsTypes, {}, {}>(
    combineReducers({ pokemon }),
    applyMiddleware(thunk as ThunkMiddleware<State, PokemonActionsTypes>)
)

export default store


