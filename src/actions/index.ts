import { ThunkDispatch } from 'redux-thunk'
import ApolloClient, { ApolloQueryResult } from 'apollo-boost'
import { LIST_POKEMONS_QUERY } from '../graphql-queries/pokemon'
import store, { State } from '../store'
import { PokemonActionsEnum, PokemonActionsTypes, PokemonState } from '../reducers/pokemon'
import { Store } from 'redux'

const LIMIT: number = 20

const client = new ApolloClient({
    uri: process.env.REACT_APP_BFF_URL
})

type PokemonApi = {
    id: number
    name: string
    image: string
    types: string[]
}

type GraphqlApiPokemon = {
    count: number
    pokemons: PokemonApi[]
}

interface IListApiPokemon {
    listPokemon: GraphqlApiPokemon
}

const sameState = (type: PokemonActionsEnum, pokemonState: PokemonState) =>
    ({
        type,
        payload: { ...pokemonState }
    })

export const initialLoad =
    async (store: Store<State, PokemonActionsTypes>): Promise<void> => {

        const result: ApolloQueryResult<IListApiPokemon> = await client.query({
            query: LIST_POKEMONS_QUERY()
        })

        store.dispatch({
            type: PokemonActionsEnum.LOAD_POKEMONS,
            payload: {
                pokemons: result.data.listPokemon.pokemons,
                count: result.data.listPokemon.count,
                offSet: 0
            }
        })
    }

export const nextPage =
    async (dispatch: ThunkDispatch<State, {}, PokemonActionsTypes>, getState: () => State): Promise<PokemonActionsTypes> => {
        const count = getState().pokemon.count
        const tempOffSet = getState().pokemon.offSet + LIMIT

        if (tempOffSet < count) {
            const offSet = tempOffSet

            const result: ApolloQueryResult<IListApiPokemon> = await client.query({
                query: LIST_POKEMONS_QUERY(offSet)
            })

            return dispatch({
                type: PokemonActionsEnum.PAGINATION,
                payload: {
                    count: result.data.listPokemon.count,
                    pokemons: result.data.listPokemon.pokemons,
                    offSet
                }
            })
        }

        return dispatch(sameState(PokemonActionsEnum.PAGINATION, getState().pokemon))
    }

export const previousPage =
    async (dispatch: ThunkDispatch<State, {}, PokemonActionsTypes>, getState: () => State): Promise<PokemonActionsTypes> => {
        const tempOffSet = store.getState().pokemon.offSet - LIMIT
        if (tempOffSet >= 0) {
            const offSet = tempOffSet
            const result: ApolloQueryResult<IListApiPokemon> = await client.query({
                query: LIST_POKEMONS_QUERY(offSet)
            })

            return dispatch({
                type: PokemonActionsEnum.PAGINATION, payload: {
                    pokemons: result.data.listPokemon.pokemons,
                    offSet,
                    count: result.data.listPokemon.count
                }
            })
        }

        return dispatch(sameState(PokemonActionsEnum.PAGINATION, getState().pokemon))
    }