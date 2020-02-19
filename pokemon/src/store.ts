import { createStore, combineReducers, applyMiddleware } from 'redux'
import pokemon, { PokemonState } from './reducers/pokemon'
import thunk from 'redux-thunk'
import { fetchPokemon } from './actions'

export interface State {
    pokemon: PokemonState
}

const store = createStore(combineReducers({ pokemon }), applyMiddleware(thunk))

store.dispatch<any>(fetchPokemon())

export default store


