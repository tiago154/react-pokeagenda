import React, { useState } from 'react'
import { Div, Sprite, Text } from './style'
import { Pokemon } from '../../types/pokemon'
import { pokeballRolling } from '../../assets'

interface IProps {
  id: number
  name: string
  spriteUrl: string
  onSelectPokemon: (pokemon: Pokemon) => void
}

const PokemonRow: React.FC<IProps> = ({ id, name, spriteUrl, onSelectPokemon }) => {
  const [imageIsLoaded, setLoadedImage] = useState(false)

  return (
    <Div onClick={() => onSelectPokemon({ id, name, image: spriteUrl, types: [''] })}>
      <Text>{id} {name}</Text>
      <Sprite
        src={imageIsLoaded ? spriteUrl : pokeballRolling}
        onLoad={() => setLoadedImage(true)}
      />
    </Div>
  )
}

export default PokemonRow
