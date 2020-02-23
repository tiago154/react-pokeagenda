import { createStore, combineReducers, applyMiddleware } from 'redux'
import pokemon, { PokemonState } from './reducers/pokemon'
import thunk from 'redux-thunk'

export interface State {
    pokemon: PokemonState
}

const store = createStore(combineReducers({ pokemon }), applyMiddleware(thunk))

export default store


