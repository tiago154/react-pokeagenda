import styled from 'styled-components'

interface IPropsStyled {
  width: number
}

export const Container = styled.div`
  height: auto;
`

export const Gif = styled.img`
    ${({ width }: IPropsStyled) => width && `width: ${width}px`};
    height: auto;
`
