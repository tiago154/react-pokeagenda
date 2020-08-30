import React from 'react'
import PokemonRow from '.'
import renderer from 'react-test-renderer'

describe('PokemonType', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(
        <PokemonRow
          id={123}
          name={'pokemonFake'}
          spriteUrl={'spriteUrlFake'}
          onSelectPokemon={() => { }}
        />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
