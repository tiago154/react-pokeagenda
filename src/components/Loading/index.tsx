import React from 'react'
import Gif from './style'
import * as gifs from './gifs'

export enum LoadingEnum {
    'pikachu' = 'pikachu',
    'pokeball' = 'pokeball'
}

interface IProps {
    width: number,
    loadingType?: LoadingEnum
}

const PokemonImage = ({ width, loadingType = LoadingEnum.pokeball }: IProps) =>
    (<Gif src={gifs[loadingType]} width={width} />)

export default PokemonImage