import { Pokemon } from '../types/pokemon'

export const LOAD_POKEMONS = 'LOAD_POKEMONS'

export type PokemonState = {
    count: number,
    pokemons: Pokemon[],
    offSet: number
}

export interface LoadPokemonsAction {
    type: typeof LOAD_POKEMONS
    payload: PokemonState
}

export type PokemonActionsTypes = LoadPokemonsAction

const initialState: PokemonState = {
    count: 0,
    pokemons: [],
    offSet: 0
}

export default (state = initialState, action: PokemonActionsTypes): PokemonState => {
    switch (action.type) {
        case 'LOAD_POKEMONS':
            return action.payload
        default:
            return state
    }
}

