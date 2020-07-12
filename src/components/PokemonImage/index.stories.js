import React from 'react'
import PokemonImage from '.'
import { withKnobs, select, number } from '@storybook/addon-knobs'

export default {
  title: 'PokemonImage',
  decorators: [withKnobs]
}

const options = {
  charmander: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  bulbasaur: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  squirtle: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
}

export const Imagens = () => <PokemonImage
  url={select('url', options, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png')}
  width={number('width', 150)}
/>
