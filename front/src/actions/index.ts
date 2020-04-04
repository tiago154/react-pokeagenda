import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import ApolloClient, { ApolloQueryResult } from 'apollo-boost'
import { LIST_POKEMONS_QUERY } from '../graphql-queries/pokemon'
import store from '../store'

const LIMIT: number = 20

const client = new ApolloClient({
    uri: process.env.REACT_APP_BFF_URL
})

type PokemonApi = {
    id: number
    name: string
    url: string
}

type GraphqlApiPokemon = {
    count: number
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
            type: 'LOAD_POKEMONS', payload: {
                pokemons: result.data.listPokemon.pokemons,
                offSet: 0,
                count: result.data.listPokemon.count
            }
        })
    }

export const NextPage = () =>
    async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<AnyAction> => {
        const count = store.getState().pokemon.count
        const tempOffSet = store.getState().pokemon.offSet + LIMIT

        if (tempOffSet < count) {
            const offSet = tempOffSet

            const result: ApolloQueryResult<IListApiPokemon> = await client.query({
                query: LIST_POKEMONS_QUERY(offSet)
            })

            return dispatch({
                type: 'LOAD_POKEMONS', payload: {
                    pokemons: result.data.listPokemon.pokemons,
                    offSet,
                    count: result.data.listPokemon.count
                }
            })
        }

        return dispatch({
            type: 'LOAD_POKEMONS', payload: {
                ...store.getState().pokemon
            }
        })
    }