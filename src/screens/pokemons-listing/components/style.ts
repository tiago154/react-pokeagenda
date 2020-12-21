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

export const ColumnListing = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 70vh;
  background: rgba(236, 236, 236, 0.71);
  border: 3px solid #1F2FC1;
  box-sizing: border-box;
  margin-left: 16px;
  border-radius: 8px;
`
