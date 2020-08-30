import React from 'react'
import { Pokemon } from '../../../../types/pokemon'

interface IProps {
  pokemons: Pokemon[]
  onNext: () => void
  onPrevious: () => void
}

const Pagination: React.FC<IProps> = ({ pokemons, onPrevious, onNext }) => (
  <div>
    <button onClick={onPrevious}>Anterior</button>
    <button onClick={onNext}>Proximo</button>
  </div>
)

export default Pagination
