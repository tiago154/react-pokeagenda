import React from 'react'
import PokemonType from '.'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'
import { PokemonTypeEnum } from '../../types/pokemonTypes'

export default {
  title: 'PokemonType',
  decorators: [withKnobs]
}

const style = {
  display: 'flex',
  height: '300px',
  'flex-direction': 'row',
  'align-items': 'center'
}

export const Tipos = () =>
  <div style={style}>
    <PokemonType
      type={select(
        'type : PokemonTypeEnum',
        PokemonTypeEnum, PokemonTypeEnum.bug
      )}
      isQuadrupleDamage={boolean('Is Quadruple Damage', false)}
    />
  </div>
