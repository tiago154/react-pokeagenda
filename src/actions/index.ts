import ApolloClient, { ApolloQueryResult } from 'apollo-boost'
import { Store } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { VIEWING_LIMIT } from '../constant'
import { LIST_POKEMONS_QUERY } from '../graphql-queries/pokemon'
import { LoadingActionsEnum } from '../reducers/loading'
import { PokemonActionsEnum, PokemonActionsTypes, PokemonState } from '../reducers/pokemon'
import { SelectedPokemonActionsEnum, SelectedPokemonActionTypes } from '../reducers/selectedPokemon'
import { State, StateActionTypes } from '../store'
import { Pokemon } from '../types/pokemon'

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

const sameState = (pokemonState: PokemonState) =>
  ({
    type: PokemonActionsEnum.SAME_STATE,
    payload: { ...pokemonState }
  })

const updateLoading = (inProgress: boolean) => ({
  type: LoadingActionsEnum.UPDATE_LOADING,
  payload: { inProgress }
})

export const initialLoad =
  async (store: Store<State, StateActionTypes>): Promise<void> => {
    const result: ApolloQueryResult<IListApiPokemon> = await client.query({
      query: LIST_POKEMONS_QUERY
    })

    store.dispatch(updateLoading(false))

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
  async (dispatch: ThunkDispatch<State, {}, StateActionTypes>, getState: () => State): Promise<PokemonActionsTypes> => {
    try {
      const count = getState().pokemon.count
      const pokemonsLength = getState().pokemon.pokemons.length
      const tempOffSet = getState().pokemon.offSet + VIEWING_LIMIT
      const inProgress = getState().loading.inProgress

      if (tempOffSet < count && !inProgress) {
        const offSet = tempOffSet

        if (pokemonsLength > tempOffSet) {
          return dispatch({
            type: PokemonActionsEnum.UPDATE,
            payload: {
              count,
              offSet,
              pokemons: getState().pokemon.pokemons
            }
          })
        }

        dispatch(updateLoading(true))

        const result: ApolloQueryResult<IListApiPokemon> = await client
          .query({
            query: LIST_POKEMONS_QUERY,
            variables: { offset: offSet }
          })
          .finally(() => dispatch(updateLoading(false)))

        return dispatch({
          type: PokemonActionsEnum.ADD_MORE_POKEMONS,
          payload: {
            count: result.data.listPokemon.count,
            pokemons: result.data.listPokemon.pokemons,
            offSet
          }
        })
      }

      return dispatch(sameState(getState().pokemon))
    } catch (error) {
      return dispatch(sameState(getState().pokemon))
    }
  }

export const previousPage =
  async (dispatch: ThunkDispatch<State, {}, StateActionTypes>, getState: () => State): Promise<PokemonActionsTypes> => {
    const count = getState().pokemon.count
    const tempOffSet = getState().pokemon.offSet - VIEWING_LIMIT
    if (tempOffSet >= 0) {
      const offSet = tempOffSet
      return dispatch({
        type: PokemonActionsEnum.UPDATE,
        payload: {
          pokemons: getState().pokemon.pokemons,
          offSet,
          count
        }
      })
    }

    return dispatch(sameState(getState().pokemon))
  }

export const selectPokemon = (pokemon: Pokemon) =>
  async (dispatch: ThunkDispatch<State, {}, StateActionTypes>): Promise<SelectedPokemonActionTypes> => {
    return dispatch({
      type: SelectedPokemonActionsEnum.SELECT_POKEMON,
      payload: {
        ...pokemon
      }
    })
  }
