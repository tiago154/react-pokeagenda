import React from 'react'
import { Pokemon } from '../../../../types/pokemon'
import { Container } from './style'
import PokemonImage from '../../../../components/PokemonImage'
import PokemonType from '../../../../components/PokemonType'
import { PokemonTypeEnum } from '../../../../types/pokemonTypes'

interface IProps {
  pokemon: Pokemon
}

const TitlePokemon: React.FC<IProps> = ({ pokemon }) => {
  return (
    <div>
      <h1>{pokemon.id} {pokemon.name}</h1>
      <PokemonImage url={pokemon.image} width={150} />
      {
        pokemon.types?.map((type) =>
          <PokemonType
            type={PokemonTypeEnum[type as keyof typeof PokemonTypeEnum]}
            key={`${pokemon.id}${type}`}
          />)
      }
    </div>
  )
}

const PokemonInformation: React.FC<IProps> = ({ pokemon }) => {
  if (!pokemon.id) return <Container></Container>
  return (
    <Container>
      <TitlePokemon pokemon={pokemon}/>
    </Container>
  )
}

export default PokemonInformation
