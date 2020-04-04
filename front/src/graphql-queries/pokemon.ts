import { gql } from "apollo-boost"

export const LIST_POKEMONS_QUERY = (offset: number = 0, limit: number = 20) => gql`
    {
        listPokemon (offset: ${offset} limit: ${limit})  {
            count pokemons {
                id name image types
            }
        }
    }
`