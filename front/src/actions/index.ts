import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import ApolloClient, { ApolloQueryResult } from 'apollo-boost'
import { LIST_POKEMONS_QUERY } from '../graphql-queries/pokemon'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})

type PokemonApi = {
    id: number
    name: string
    url: string
}

type GraphqlApiPokemon = {
    count: number
    next: string
    previous: string
    pokemons: PokemonApi[]
}

interface IListApiPokemon {
    listPokemon: GraphqlApiPokemon
}

export const initialLoad = () =>
    async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<AnyAction> => {
        const result: ApolloQueryResult<IListApiPokemon> = await client.query({
            query: LIST_POKEMONS_QUERY()
        })

        return dispatch({
            type: 'LOAD_POKEMONS', payload: result.data.listPokemon.pokemons
        })
    } 