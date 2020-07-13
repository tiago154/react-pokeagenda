import React from 'react'
import PokemonRow from '.'
import { withKnobs, select } from '@storybook/addon-knobs'

export default {
  title: 'PokemonRow',
  decorators: [withKnobs]
}

const ids = [7, 25, 36, 151]
const names = ['Squirtle', 'Pikachu', 'Clefable', 'Mew']
const spriteUrls = [
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ids[0]}.png`,
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ids[1]}.png`,
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ids[2]}.png`,
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ids[3]}.png`
]

export const Linha = () =>
  <PokemonRow
    id={select('id', ids, ids[0])}
    name={select('name', names, names[0])}
    spriteUrl={select('spriteUrl', spriteUrls, spriteUrls[0])}
  >
  </PokemonRow>
