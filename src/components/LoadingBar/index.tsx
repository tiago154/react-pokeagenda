import React from 'react'
import { Container, Text } from './style'

interface IProps {
  backgroundColor: string
  text: string
}

const LoadingBar: React.FC<IProps> = ({ backgroundColor, text }) => (
  <Container backgroundColor={backgroundColor}>
    <Text>{text}</Text>
  </Container>
)

export default LoadingBar
