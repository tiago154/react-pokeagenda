import React from 'react'
import Loading, { LoadingEnum } from '.'
import { withKnobs, select, number } from '@storybook/addon-knobs'

export default {
  title: 'Loading',
  decorators: [withKnobs]
}

export const Imagens = () => <Loading
  loadingType={select('loadingType', LoadingEnum, LoadingEnum.pikachu)}
  width={number('width', 250)}
/>
