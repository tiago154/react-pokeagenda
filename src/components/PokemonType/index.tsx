import React from 'react'
import { PokemonTypeEnum } from '../../types/pokemonTypes'
import TypePokemon, { QuadrupleDamage, QuadrupleDamageMessage } from './style'
interface IProps {
  type: PokemonTypeEnum
  isQuadrupleDamage?: boolean
}

const PokemonType = ({ type, isQuadrupleDamage }: IProps) => (
  <TypePokemon background={type}>
    {type}
    {isQuadrupleDamage &&
      <QuadrupleDamage title="Deals 4x damage">
        <QuadrupleDamageMessage>Deals 4x damage</QuadrupleDamageMessage>
      </QuadrupleDamage>}
  </TypePokemon>
)

export default PokemonType
