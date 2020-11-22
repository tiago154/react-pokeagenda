import React from 'react'
import PokemonRow from '.'
import { withKnobs, text, number } from '@storybook/addon-knobs'

export default {
  title: 'PokemonRow',
  decorators: [withKnobs]
}

export const Linha = () =>
  <PokemonRow
    pokemon={
      {
        id: number('id', 7),
        name: text('name', 'Squirtle'),
        image: text('image', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png')
      }
    }
  />
