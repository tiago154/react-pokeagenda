import React from 'react'
import { Attribute } from '.'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'LoadingBar',
  decorators: [withKnobs]
}

export const loadingBar = () => (
  <Attribute
    title={text('text', 'Loading...')}
    value={text('text', 'Loading...')}
  />
)
