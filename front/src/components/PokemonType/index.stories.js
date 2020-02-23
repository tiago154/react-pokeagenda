import React from 'react';
import PokemonType from '.';
import { withKnobs, select } from "@storybook/addon-knobs";
import { PokemonTypeEnum } from '../../types/pokemonTypes';

export default {
  title: 'PokemonType',
  decorators: [withKnobs]
};

export const Tipos = () => <PokemonType type={select('type : PokemonTypeEnum', PokemonTypeEnum, PokemonTypeEnum.bug)}></PokemonType>