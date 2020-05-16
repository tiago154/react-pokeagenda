import { Pokemon } from '../types/pokemon'

export enum PokemonActionsEnum {
    LOAD_POKEMONS,
    PAGINATION
}

export type PokemonState = {
    count: number,
    pokemons: Pokemon[],
    offSet: number
}

export interface PokemonsAction {
    type: PokemonActionsEnum
    payload: PokemonState
}

export type PokemonActionsTypes = PokemonsAction

const initialState: PokemonState = {
    count: 0,
    pokemons: [],
    offSet: 0
}

export default (state = initialState, action: PokemonActionsTypes): PokemonState => {
    switch (action.type) {
        case PokemonActionsEnum.LOAD_POKEMONS:
            return { ...state, ...action.payload }
        case PokemonActionsEnum.PAGINATION:
            return action.payload
        default:
            return state
    }
}

