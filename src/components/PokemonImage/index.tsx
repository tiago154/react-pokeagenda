import React from 'react'
import ImagePokemon from './style'

interface IProps {
  url: string,
  width: number,
  title?: string
}

const PokemonImage = ({ url, width, title }: IProps) => (
  <ImagePokemon src={url} width={width} alt={title} title={title}/>
)

export default PokemonImage
