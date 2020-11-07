import { gql } from 'apollo-boost'
import { VIEWING_LIMIT } from '../constant'

export const LIST_POKEMONS_QUERY = gql`
  query ($offset: Int = 0, $limit: Int = ${VIEWING_LIMIT}) {
    listPokemon(offset: $offset, limit: $limit) {
      count pokemons{
        id name image types
      }
    }
}
`
