import React from 'react'
import { Height } from '.'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Height',
  decorators: [withKnobs]
}

export const height = () => (
  <Height
    title={text('text', 'Loading...')}
    value={text('text', 'Loading...')}
  />
)
