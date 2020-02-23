import React from 'react'
import PokemonType from '.'
import renderer from 'react-test-renderer';
import { PokemonTypeEnum } from '../../types/pokemonTypes';

describe('PokemonType', () => {
    it('Renders correctly', () => {
        const tree = renderer
            .create(<PokemonType type={PokemonTypeEnum.fire}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})