import React from 'react'

import { Pokemon } from '../../../types/pokemon'
import GifLoader, { GifEnum } from '../../../components/GifLoader'
import PokemonRow from '../../../components/PokemonRow'
import { Container } from './style'

interface IProps {
  pokemons: Pokemon[]
  inProgress: boolean
  onNext: () => void
  onPrevious: () => void
  onSelectPokemon: (pokemon: Pokemon) => void
}

const PokemonsListing: React.FC<IProps> = ({ pokemons, inProgress, onNext, onPrevious, onSelectPokemon }) => {
  return (
    <Container>
      <div>
        {
          pokemons.map(({ id, name, image }) => <PokemonRow
            key={id}
            id={id}
            name={name}
            spriteUrl={image}
            onSelectPokemon={onSelectPokemon}
          />)
        }
      </div>
      {
        !!pokemons.length &&
        <div>
          <button onClick={onPrevious}>Anterior</button>
          <button onClick={onNext}>Proximo</button>
        </div>
      }
      {inProgress
        ? <div><GifLoader width={100} loadingType={GifEnum.pikachu} /></div>
        : <div><GifLoader width={120} loadingType={GifEnum.standing} /></div>}
    </Container>
  )
}

export default PokemonsListing
