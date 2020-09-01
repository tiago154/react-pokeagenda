import React from 'react'
import { Gif, Container } from './style'
import * as gifs from './gifs'

export enum GifEnum {
  'pikachu' = 'pikachu',
  'pokeball' = 'pokeball',
  'standing' = 'standing'
}
interface IProps {
  width: number,
  loadingType?: GifEnum
}

const GifLoader = ({ width, loadingType = GifEnum.pokeball }: IProps) =>
  (
    <Container>
      <Gif src={gifs[loadingType]} width={width} />
    </Container>
  )

export default GifLoader
