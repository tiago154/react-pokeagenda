import { Pokemon } from '../types/pokemon'

export enum SelectedPokemonActionsEnum {
  'SELECT_POKEMON' = 'SELECT_POKEMON',
}

export type SelectedPokemonState = Pokemon

export interface SelectedPokemonAction {
  type: SelectedPokemonActionsEnum
  payload: SelectedPokemonState
}

export type SelectedPokemonActionTypes = SelectedPokemonAction

const initialState: SelectedPokemonState = {
  id: 0,
  image: '',
  name: ''
}

export default (state = initialState, action: SelectedPokemonActionTypes): SelectedPokemonState => {
  switch (action.type) {
    case SelectedPokemonActionsEnum.SELECT_POKEMON:
      return { ...action.payload }
    default:
      return state
  }
}
