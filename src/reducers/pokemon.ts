import { Pokemon } from '../types/pokemon'

export enum PokemonActionsEnum {
  'LOAD_POKEMONS' = 'LOAD_POKEMONS',
  'ADD_MORE_POKEMONS' = 'ADD_MORE_POKEMONS',
  'SAME_STATE' = 'SAME_STATE',
  'UPDATE' = 'UPDATE',
  'SELECT_POKEMON' = 'SELECT_POKEMON'
}

export type PokemonState = {
  count: number,
  pokemons: Pokemon[],
  offSet: number,
  selectedPokemon: Pokemon
}

export interface PokemonsAction {
  type: PokemonActionsEnum
  payload: PokemonState
}

export type PokemonActionsTypes = PokemonsAction

const initialState: PokemonState = {
  count: 0,
  pokemons: [],
  offSet: 0,
  selectedPokemon: {
    id: 0,
    image: '',
    name: '',
    types: ['']
  }
}

export default (state = initialState, action: PokemonActionsTypes): PokemonState => {
  switch (action.type) {
    case PokemonActionsEnum.LOAD_POKEMONS:
      return { ...state, ...action.payload }
    case PokemonActionsEnum.ADD_MORE_POKEMONS:
      return {
        ...action.payload,
        pokemons: [...state.pokemons, ...action.payload.pokemons]
      }
    case PokemonActionsEnum.UPDATE:
      return action.payload
    case PokemonActionsEnum.SAME_STATE:
      return action.payload
    case PokemonActionsEnum.SELECT_POKEMON:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
