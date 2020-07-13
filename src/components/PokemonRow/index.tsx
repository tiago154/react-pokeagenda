import React from 'react'
import { Div, Sprite, Text } from './style'

interface IProps {
  id: number,
  name: string,
  spriteUrl: string
}

// eslint-disable-next-line react/prop-types
const PokemonRow: React.FC<IProps> = ({ id, name, spriteUrl }) => (
  <Div>
    <Text>{id} {name}</Text>
    <Sprite src={spriteUrl} />
  </Div>
)

export default PokemonRow
