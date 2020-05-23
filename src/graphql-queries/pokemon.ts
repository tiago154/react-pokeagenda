import { gql } from 'apollo-boost'
import { VIEWING_LIMIT } from '../constant'

export const LIST_POKEMONS_QUERY = (offset: number = 0, limit: number = VIEWING_LIMIT) => gql`
    {
        listPokemon (offset: ${offset} limit: ${limit})  {
            count pokemons {
                id name image types
            }
        }
    }
`