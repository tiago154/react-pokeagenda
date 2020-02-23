import React from 'react'

import { Pokemon } from '../../types/pokemon'

interface IProps {
    pokemons: Pokemon[];
}

const PokemonList = ({ pokemons }: IProps) => (
    <div>
        {
            pokemons.map(pokemon =>
            <div key={pokemon.id}>#{pokemon.id} {pokemon.name}</div>)
        }
    </div>
)

export default PokemonList