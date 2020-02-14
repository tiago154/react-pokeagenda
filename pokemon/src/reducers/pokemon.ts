import { Pokemon } from '../types/pokemon'

export const ADD_POKEMON = 'ADD_POKEMON'

export type PokemonState = {
    pokemons: Pokemon[]
}

interface AddPokemonAction {
    type: typeof ADD_POKEMON
    payload: Pokemon
}

export type PokemonActionTypes = AddPokemonAction

const initialState: PokemonState = {
    pokemons: [
        { name: 'Pikachu' },
        { name: 'Squirtle' },
        { name: 'Bulbasaur' }
    ]
}

export default (state = initialState, action: PokemonActionTypes): PokemonState => {
    switch (action.type) {
        case 'ADD_POKEMON':
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload]
            }
    }
    return state
}

