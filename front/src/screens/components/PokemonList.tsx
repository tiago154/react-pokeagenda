import React from 'react'

import { Pokemon } from '../../types/pokemon'

interface IProps {
    pokemons: Pokemon[]
    onNext: () => void
    onPrevious: () => void
}

// @TODO Criar state para o componente para controlar o carregamento
const PokemonList = ({ pokemons, onNext, onPrevious }: IProps) => (
    <div>
        <div>
            {
                pokemons.map(pokemon =>
                    <div key={pokemon.id}>#{pokemon.id} {pokemon.name}</div>)
            }
        </div>
        <button onClick={onPrevious}>Anterior</button>
        <button onClick={onNext}>Proximo</button>
    </div>
)

export default PokemonList