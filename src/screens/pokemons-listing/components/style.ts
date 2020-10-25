import styled from 'styled-components'
import { background } from '../../../assets'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: round;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 70vh;
  border: red solid 2px;
  background: rgba(236, 236, 236, 0.71);
`
