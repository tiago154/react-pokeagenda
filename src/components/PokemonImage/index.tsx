import React from 'react'
import ImagePokemon from './style'

interface IProps {
  url: string,
  width: number
}

const PokemonImage = ({ url, width }: IProps) => (
  <ImagePokemon src={url} width={width} />
)

export default PokemonImage
