import React from 'react'
import { PokemonTypeEnum } from '../../types/pokemonTypes'
import TypePokemon from './style'

interface IProps {
    type: PokemonTypeEnum
}

const PokemonType = ({ type }: IProps) => {
  console.log('TYPE:', typeof type)
  return (
    <TypePokemon background={type}>
      {type}
    </TypePokemon>
  )
}

export default PokemonType
