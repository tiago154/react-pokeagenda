import styled from 'styled-components';

interface IPropsStyled {
    width: number
}

const ImagePokemon = styled.img`
    ${({ width }: IPropsStyled) => width && `max-width: ${width}px`}
    height: auto;
`;

export default ImagePokemon