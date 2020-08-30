import React from 'react'

import { Pokemon } from '../../../types/pokemon'
import Listing from './Listing'
import Pagination from './Pagination'
import { Container } from './style'
import ProgressGif from './ProgressGif'

interface IProps {
  pokemons: Pokemon[]
  inProgress: boolean
  onNext: () => void
  onPrevious: () => void
  onSelectPokemon: (pokemon: Pokemon) => void
}

const PokemonsListing: React.FC<IProps> = ({ pokemons, inProgress, onNext, onPrevious, onSelectPokemon }) =>
  (
    <Container>
      <Listing pokemons={pokemons} onSelectPokemon={onSelectPokemon} />
      <Pagination pokemons={pokemons} onNext={onNext} onPrevious={onPrevious} />
      <ProgressGif inProgress={inProgress} />
    </Container>
  )

export default PokemonsListing
