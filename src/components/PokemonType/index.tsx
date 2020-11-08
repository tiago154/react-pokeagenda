import React from 'react'
import { PokemonTypeEnum } from '../../types/pokemonTypes'
import TypePokemon from './style'

interface IProps {
  type: PokemonTypeEnum
}

const PokemonType = ({ type }: IProps) => {
  return (
    <TypePokemon background={type}>
      {type}
    </TypePokemon>
  )
}

export default PokemonType
