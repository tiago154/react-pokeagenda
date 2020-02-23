import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { Pokemon } from '../types/pokemon'

type PokemonApi = {
    name: string
    url: string
}

interface IListApiPokemon {
    count: number
    next: string
    previous: string
    results: PokemonApi[]
}

const mapToPokemon = (pokemon: PokemonApi) : Pokemon => ({
    id: Number(pokemon.url.split('pokemon/')[1].replace('/', '')),
    name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
})

export const initialLoad = () =>
    async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<AnyAction> => {
        const result: IListApiPokemon = await (await fetch('https://pokeapi.co/api/v2/pokemon')).json()
        const pokemons = result.results.map(mapToPokemon)
        return dispatch({
            type: 'LOAD_POKEMONS', payload: pokemons
        })
    } 