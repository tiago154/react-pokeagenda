import React from 'react'
import { Div, Sprite, Text } from './style'
import { Pokemon } from '../../types/pokemon'

interface IProps {
  id: number
  name: string
  spriteUrl: string
  onSelectPokemon: (pokemon: Pokemon) => void
}

const PokemonRow: React.FC<IProps> = ({ id, name, spriteUrl, onSelectPokemon }) => (
  <Div onClick={() => onSelectPokemon({ id, name, image: spriteUrl, types: [''] })}>
    <Text>{id} {name}</Text>
    <Sprite src={spriteUrl} />
  </Div>
)

export default PokemonRow
