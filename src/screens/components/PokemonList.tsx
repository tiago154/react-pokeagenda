import React, { useState, useEffect } from 'react'

import { Pokemon } from '../../types/pokemon'

interface IProps {
    pokemons: Pokemon[]
    onNext: () => void
    onPrevious: () => void
}

const clickButton = (
    onEvent: () => void,
    setDataLoaded: React.Dispatch<React.SetStateAction<boolean>>,
    isDataLoaded: React.SetStateAction<boolean>) => {
    setDataLoaded(isDataLoaded)
    onEvent()
}

const PokemonList = ({ pokemons, onNext, onPrevious }: IProps) => {
    const [isDataLoaded, setDataLoaded] = useState(false)

    useEffect(() => {
        if (pokemons.length)
            setDataLoaded(true)
    }, [pokemons])

    if (isDataLoaded) {
        return (
            <div>
                <div>
                    {
                        pokemons.map(pokemon =>
                            <div key={pokemon.id}>#{pokemon.id} {pokemon.name}</div>)
                    }
                </div>
                <button onClick={() => clickButton(onPrevious, setDataLoaded, true)}>Anterior</button>
                <button onClick={() => clickButton(onNext, setDataLoaded, false)}>Proximo</button>
            </div>
        )
    }


    return <div><p>Carregando....</p></div>
}

export default PokemonList