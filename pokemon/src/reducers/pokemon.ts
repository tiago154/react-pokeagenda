import { Pokemon } from '../types/pokemon'

export const LOAD_POKEMONS = 'LOAD_POKEMONS'

export type PokemonState = {
    pokemons: Pokemon[]
}

export interface LoadPokemonsAction {
    type: typeof LOAD_POKEMONS
    payload: Pokemon[]
}

export type PokemonActionsTypes = LoadPokemonsAction

const initialState: PokemonState = {
    pokemons: []
}

export default (state = initialState, action: PokemonActionsTypes): PokemonState => {
    switch (action.type) {
        case 'LOAD_POKEMONS':
            return {
                pokemons: [...state.pokemons, ...action.payload]
            }
        default:
            return state
    }
}

