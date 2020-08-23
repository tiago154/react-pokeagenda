import React from 'react'
import LoadingBar from '.'
import { withKnobs, color, text } from '@storybook/addon-knobs'

export default {
  title: 'LoadingBar',
  decorators: [withKnobs]
}

export const loadingBar = () => (
  <LoadingBar
    backgroundColor={color('backgroundColor', '#F2C94C')}
    text={text('text', 'Loading...')}
  />
)
