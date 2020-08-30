import React from 'react'
import GifLoader, { GifEnum } from '../../../../components/GifLoader'

interface IProps {
  inProgress: boolean
}

const ProgressGif: React.FC<IProps> = ({ inProgress }) =>
  inProgress
    ? <div><GifLoader width={100} loadingType={GifEnum.pikachu} /></div>
    : <div><GifLoader width={120} loadingType={GifEnum.standing} /></div>

export default ProgressGif
