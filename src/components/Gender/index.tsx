import React from 'react'
import { Container, Text } from './style'

interface IProps {
  title: string
  value: string
}

export const Attribute: React.FC<IProps> = ({ title, value }) => (
  <Container>
    <Text>{title}</Text>
    <Text>{value}</Text>
  </Container>
)
