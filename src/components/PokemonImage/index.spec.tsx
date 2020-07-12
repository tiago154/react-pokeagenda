import React from 'react'
import PokemonImage from '.'
import renderer from 'react-test-renderer'

describe('PokemonImage', () => {
  it('Renders correctly', () => {
    const component = <PokemonImage
      url={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'}
      width={120}
    />
    const tree = renderer
      .create(component)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
