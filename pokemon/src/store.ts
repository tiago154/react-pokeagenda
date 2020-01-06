import { createStore, combineReducers } from 'redux'
import pokemon, { PokemonState } from './reducers/pokemon'

export interface State {
    pokemon: PokemonState
}

const store = createStore(combineReducers({ pokemon }))

export default store


