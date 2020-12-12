import React from 'react'
import { Container, Title, Value } from './style'

interface IProps {
  children: number
}

export const Height: React.FC<IProps> = ({ children }) => (
  <Container>
    <Title>Height</Title>
    <Value>{children} M</Value>
  </Container>
)
