import React from 'react'
import { Container, Title, Value } from './style'

interface IProps {
  children: number
}

export const Weight: React.FC<IProps> = ({ children }) => (
  <Container>
    <Title>Weight</Title>
    <Value>{children} KG</Value>
  </Container>
)
