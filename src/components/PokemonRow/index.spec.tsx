import React from 'react'
import renderer from 'react-test-renderer'
import PokemonRow from '.'
import { Pokemon } from '../../types/pokemon'

describe('PokemonType', () => {
  it('Renders correctly', () => {
    const fakePokemon: Pokemon = {
      id: 123,
      image: 'fakeImage',
      name: 'fakeName'
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
