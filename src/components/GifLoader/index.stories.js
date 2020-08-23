import React from 'react'
import GifLoader, { GifEnum } from '.'
import { withKnobs, select, number } from '@storybook/addon-knobs'

export default {
  title: 'Loading',
  decorators: [withKnobs]
}

export const Imagens = () => <GifLoader
  loadingType={select('loadingType', GifEnum, GifEnum.pikachu)}
  width={number('width', 250)}
/>
