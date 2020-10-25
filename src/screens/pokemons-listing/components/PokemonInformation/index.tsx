import React from 'react'
import { Pokemon } from '../../../../types/pokemon'
import { Container } from './style'
import PokemonImage from '../../../../components/PokemonImage'

interface IProps {
  pokemon: Pokemon
}

const PokemonInformation: React.FC<IProps> = ({ pokemon }) => (
  <Container>
    {pokemon && <PokemonImage url={pokemon.image} width={150} />}
  </Container>
)

export default PokemonInformation
