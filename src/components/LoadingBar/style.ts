import styled from 'styled-components'

interface IPropsStyledContainer {
  backgroundColor: string
}

export const Container = styled.div<IPropsStyledContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ backgroundColor }) => `${backgroundColor}`};
  border-radius: 15px;
  height: 100px;
  width: 92%;
`

export const Text = styled.p`
  color: #000;
  font-family: 'Fascinate Inline', cursive;
  font-size: 64px;
  font-weight: 900;
  font-style: normal;
`
