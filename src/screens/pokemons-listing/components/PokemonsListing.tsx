import React from 'react'

import { Pokemon } from '../../../types/pokemon'
import Listing from './Listing'
import Pagination from './Pagination'
import { Container, Row, Column } from './style'
import ProgressGif from './ProgressGif'
import PokemonInformation from './PokemonInformation'

interface IProps {
  pokemons: Pokemon[]
  inProgress: boolean
  selectedPokemon: Pokemon
  onNext: () => void
  onPrevious: () => void
  onSelectPokemon: (pokemon: Pokemon) => void
}

const PokemonsListing: React.FC<IProps> = (
  {
    pokemons,
    inProgress,
    selectedPokemon,
    onNext,
    onPrevious,
    onSelectPokemon
  }) =>
  (
    <Container>
      <Row>
        <Column>
          <Listing pokemons={pokemons} onSelectPokemon={onSelectPokemon} />
          <Pagination onNext={onNext} onPrevious={onPrevious} />
        </Column>
        <PokemonInformation pokemon={selectedPokemon}></PokemonInformation>
      </Row>
      <Row>
        <ProgressGif inProgress={inProgress} />
      </Row>
    </Container>
  )

export default PokemonsListing
