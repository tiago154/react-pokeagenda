import React from 'react'
import PokemonImage from '../../../../components/PokemonImage'
import PokemonType from '../../../../components/PokemonType'
import { Pokemon } from '../../../../types/pokemon'
import { PokemonTypeEnum } from '../../../../types/pokemonTypes'
import { Container } from './style'

interface IProps {
  pokemon: Pokemon
}

const TitlePokemon: React.FC<IProps> = ({ pokemon }) => {
  console.log(pokemon.weaknesses)
  return (
    <div>
      <h1>{pokemon.id} {pokemon.name}</h1>
      <PokemonImage url={pokemon.image} width={150} />
      <div>
        <h4>Type</h4>
        <div>
          {
            pokemon.types?.map((type) =>
              <PokemonType
                type={PokemonTypeEnum[type as keyof typeof PokemonTypeEnum]}
                key={`${pokemon.id}${type}`}
              />)
          }
        </div>
      </div>
      <div>
        <h4>Weaknesses</h4>
        <div>
          {
            pokemon.weaknesses?.map(({ name }) =>
              <PokemonType
                type={PokemonTypeEnum[name as keyof typeof PokemonTypeEnum]}
                key={`${pokemon.id}${name}-weakness`}
              />)
          }
        </div>
      </div>
    </div>
  )
}

const PokemonInformation: React.FC<IProps> = ({ pokemon }) => {
  if (!pokemon.id) return <Container></Container>
  return (
    <Container>
      <TitlePokemon pokemon={pokemon} />
    </Container>
  )
}

export default PokemonInformation
