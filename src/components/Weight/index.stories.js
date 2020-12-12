import React from 'react'
import { Weight } from '.'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Weight',
  decorators: [withKnobs]
}

export const weight = () => (
  <Weight
    title={text('text', 'Loading...')}
    value={text('text', 'Loading...')}
  />
)
