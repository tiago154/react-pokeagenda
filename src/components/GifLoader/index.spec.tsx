import React from 'react'
import GifLoader, { GifEnum } from '.'
import * as gifs from './gifs'
import renderer from 'react-test-renderer'

describe('PokemonType', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(
        <GifLoader
          width={250}
          loadingType={GifEnum.standing}
        />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
