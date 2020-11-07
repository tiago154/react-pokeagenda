import React from 'react'
import PokemonRow from '../../../../components/PokemonRow'
import { Pokemon } from '../../../../types/pokemon'
import { Container } from './style'

interface IProps {
  pokemons: Pokemon[]
  onSelectPokemon: (pokemon: Pokemon) => void
}

const Listing: React.FC<IProps> = ({ pokemons, onSelectPokemon }) => (
  <Container>
    {
      pokemons.map(pokemon => <PokemonRow
        key={pokemon.id}
        pokemon={pokemon}
        onSelectPokemon={onSelectPokemon}
      />)
    }
  </Container>
)

export default Listing
