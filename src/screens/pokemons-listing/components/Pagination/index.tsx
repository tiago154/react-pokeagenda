import React from 'react'
import { Container, Button } from './style'

interface IProps {
  onNext: () => void
  onPrevious: () => void
}

const Pagination: React.FC<IProps> = ({ onPrevious, onNext }) => (
  <Container>
    <Button onClick={onPrevious}>Anterior</Button>
    <Button onClick={onNext}>Proximo</Button>
  </Container>
)

export default Pagination
