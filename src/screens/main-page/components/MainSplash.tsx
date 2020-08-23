import React from 'react'
import { Pokemon } from '../../../types/pokemon'
import GifLoader from '../../../components/GifLoader'
import LoadingBar from '../../../components/LoadingBar'
import PokemonsListing from '../../pokemons-listing/containers/PokemonsListing'
import { Container } from './style'

interface IProps {
  pokemons: Pokemon[]
  inProgress: boolean
}

const MainSplash: React.FC<IProps> = ({ pokemons, inProgress }) => {
  if (!pokemons.length && inProgress) {
    return (
      <Container>
        <GifLoader width={280} />
        <LoadingBar backgroundColor={'#F2C94C'} text={'Loading...'} />
      </Container>
    )
  }
  return <PokemonsListing />
}

export default MainSplash
