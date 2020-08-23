import React from 'react'
import LoadingBar from '.'
import renderer from 'react-test-renderer'

describe('PokemonType', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(
        <LoadingBar
          backgroundColor={'#F2C94C'}
          text={'Loading...'}
        />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
