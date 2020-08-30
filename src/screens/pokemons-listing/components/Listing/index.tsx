import React from 'react'
import PokemonRow from '../../../../components/PokemonRow'
import { Pokemon } from '../../../../types/pokemon'

interface IProps {
  pokemons: Pokemon[]
  onSelectPokemon: (pokemon: Pokemon) => void
}

const Listing: React.FC<IProps> = ({ pokemons, onSelectPokemon }) => (
  <div>
    {
      pokemons.map(({ id, name, image }) => <PokemonRow
        key={id}
        id={id}
        name={name}
        spriteUrl={image}
        onSelectPokemon={onSelectPokemon}
      />)
    }
  </div>
)

export default Listing
