import React from 'react'
import { Container, Title, Value } from './style'

interface IProps {
  children: string
}

export const Category: React.FC<IProps> = ({ children }) => (
  <Container>
    <Title>Category</Title>
    <Value>{children}</Value>
  </Container>
)
