// import { PokemonActionsTypes } from '../reducers/pokemon'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

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

const mapToPokemon = (pokemon: PokemonApi) => ({
    id: pokemon.url.split('pokemon/')[1].replace('/', ''),
    name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
})

// Segunda função recebe 2 parametros, dispatch e getState que é uma função
//@TODO arrumar tipagem
export const fetchPokemon = () =>
    async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<AnyAction> => {
        const result: IListApiPokemon = await (await fetch('https://pokeapi.co/api/v2/pokemon')).json()
        const teste = result.results.map(mapToPokemon)
        return dispatch({
            type: 'LOAD_POKEMONS', payload: teste
        })
    } 