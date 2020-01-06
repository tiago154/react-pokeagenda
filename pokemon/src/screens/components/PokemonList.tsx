import React from 'react'

import { Pokemon } from '../../types/pokemon'

interface IProps {
    pokemons: Pokemon[];
    onAdd: () => void;
}

const PokemonList = ({ pokemons, onAdd } : IProps) => (
    <div>
    {
        pokemons.map(pokemon => <div>{pokemon.name}</div>)
    }
    <button type="button" onClick={onAdd}>Adicionar</button>
    </div>
)

export default PokemonList