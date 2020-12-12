import React from 'react'
import PokemonImage from '../../../../components/PokemonImage'
import PokemonType from '../../../../components/PokemonType'
import { Pokemon } from '../../../../types/pokemon'
import { PokemonTypeEnum } from '../../../../types/pokemonTypes'
import { Height } from '../../../../components/Height'
import { Weight } from '../../../../components/Weight'
import { Category } from '../../../../components/Category'
import { Abilities } from '../../../../components/Abilities'
import {
  Container,
  InitialContainer,
  TitleDiv,
  TitlePokemon,
  TitleType,
  TypesDiv,
  TypePokemonDiv,
  WeaknessPokemonDiv,
  TypePokemonList,
  WeaknessPokemonList,
  Attribute,
  Attributes,
  TopInformation,
  ImageStyle
} from './style'

interface IProps {
  pokemon: Pokemon
}

const PokemonInformation: React.FC<IProps> = ({ pokemon }) => {
  if (!pokemon.id) {
    return (
      <InitialContainer>
        <PokemonImage url={'https://miro.medium.com/max/4000/1*DJZWzlN2BTgRf_NSu0u02g.png'} width={500} />
        <PokemonImage url={'https://i.pinimg.com/originals/46/8f/78/468f7826c935091acfb33c303733a0e5.png'} width={250} />
      </InitialContainer>
    )
  }
  return (
    <Container>
      <TitleDiv>
        <TitlePokemon>
          {pokemon.id.toString().padStart(3, '0')} {pokemon.name}
        </TitlePokemon>
      </TitleDiv>
      <TopInformation>
        <ImageStyle>
          <PokemonImage url={pokemon.image} width={150} />
        </ImageStyle>
        <TypesDiv>
          <TypePokemonDiv>
            <TitleType>Type</TitleType>
            <TypePokemonList>
              {
                pokemon.types?.map((type) =>
                  <PokemonType
                    type={PokemonTypeEnum[type as keyof typeof PokemonTypeEnum]}
                    key={`${pokemon.id}${type}`}
                  />)
              }
            </TypePokemonList>
          </TypePokemonDiv>
          <WeaknessPokemonDiv>
            <TitleType>Weaknesses</TitleType>
            <WeaknessPokemonList>
              {
                pokemon.weaknesses?.map(({ name, quadrupleDamage }) =>
                  <PokemonType
                    type={PokemonTypeEnum[name as keyof typeof PokemonTypeEnum]}
                    isQuadrupleDamage={quadrupleDamage}
                    key={`${pokemon.id}${name}-weakness`}
                  />)
              }
            </WeaknessPokemonList>
          </WeaknessPokemonDiv>
        </TypesDiv>
      </TopInformation>
      <Attributes>
        <Attribute>
          <Height>{pokemon.height}</Height>
          <Category>{pokemon.species.category}</Category>
        </Attribute>
        <Attribute>
          <Weight>{pokemon.weight}</Weight>
          <Abilities abilities={pokemon.abilities}/>
        </Attribute>
      </Attributes>
    </Container>
  )
}

export default PokemonInformation
