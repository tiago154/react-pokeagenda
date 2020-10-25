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
      pokemons.map(({ id, name, image }) => <PokemonRow
        key={id}
        id={id}
        name={name}
        spriteUrl={image}
        onSelectPokemon={onSelectPokemon}
      />)
    }
  </Container>
)

export default Listing
