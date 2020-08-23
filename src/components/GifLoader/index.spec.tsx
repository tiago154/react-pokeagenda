import React from 'react'
import GifLoader, { GifEnum } from '.'
import renderer from 'react-test-renderer'

describe('PokemonType', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(
        <GifLoader
          width={220}
          loadingType={GifEnum.pokeball}
        />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
