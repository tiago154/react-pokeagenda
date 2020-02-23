import { gql } from "apollo-boost"

export const LIST_POKEMONS_QUERY = (offset = 0, limit = 20) => gql`
    {
        listPokemon (offset: ${offset} limit: ${limit})  {
            count next previous pokemons {
                id name url
            }
        }
    }
`