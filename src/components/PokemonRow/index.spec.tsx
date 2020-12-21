import React from 'react'
import renderer from 'react-test-renderer'
import PokemonRow from '.'
import { GenderTypesEnum } from '../../types/genderTypes'
import { Pokemon } from '../../types/pokemon'

describe('PokemonType', () => {
  it('Renders correctly', () => {
    const fakePokemon: Pokemon = {
      id: 123,
      image: 'fakeImage',
      name: 'fakeName',
      abilities: [
        { name: 'fakeAbility', description: 'fakeDescriptionAbility' }
      ],
      height: 1,
      weight: 1,
      species: {
        category: 'fakeCategory',
        genreRate: GenderTypesEnum.BOTH
      }
    }

    const tree = renderer
      .create(
        <PokemonRow
          pokemon={fakePokemon}
          onSelectPokemon={() => { }}
        />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
