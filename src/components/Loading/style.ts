import styled from 'styled-components'

interface IPropsStyled {
    width: number
}

const Gif = styled.img`
    ${({ width }: IPropsStyled) => width && `max-width: ${width}px`}
    height: auto;
`

export default Gif
