import React, { useState } from 'react'
import { Div, Sprite, Text } from './style'
import { Pokemon } from '../../types/pokemon'
import { pokeballRolling } from '../../assets'

interface IProps {
  pokemon: Pokemon,
  onSelectPokemon: (pokemon: Pokemon) => void
}

const PokemonRow: React.FC<IProps> = ({ pokemon, onSelectPokemon }) => {
  const [imageIsLoaded, setLoadedImage] = useState(false)
  const { id, name, image } = pokemon
  return (
    <Div onClick={() => onSelectPokemon(pokemon)}>
      <Text>{id.toString().padStart(3, '0')} {name}</Text>
      <Sprite
        src={imageIsLoaded ? image : pokeballRolling}
        onLoad={() => setLoadedImage(true)}
      />
    </Div>
  )
}

export default PokemonRow
