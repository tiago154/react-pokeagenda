import styled, { createGlobalStyle } from 'styled-components';
import pokemonFont from '../assets/fonts/PokemonSolid.ttf';
import backgroundPokemon from '../assets/images/background.jpg';



export const GlobalStyled = createGlobalStyle`
    @font-face {
        font-family: 'Pokemon';
        src: url(${pokemonFont});
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }
    
    body::before {
        content: "";
        position: fixed;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url(${backgroundPokemon});
        opacity: .3;
    }

    body {
        font: 14px 'Raleway', sans-serif;
        background: #f3f0ee;
        color: #333;
        overflow-x: hidden;
        ${({ hiddenOverFlowY }) => hiddenOverFlowY ? `overflow-y: hidden` : ''}
    }

    ul {
        list-style: none;
    }
`;

export const Button = styled.button`
    background: #ffcc03;
    color: #3537b3;
    border-radius: 5px;
    border: 1px solid #3537b3;
    font-weight: bold;

    :hover {
        background: #8bc34a;
    }

    :focus {
        outline: none;
    }
`;

export const Label = styled.label`
    color: ${props => `${props.color}`};
    font-weight: bold;
`;

const sizeImg = size => {
    if (size === 'small') {
        return `
            width: 50px; 
            height: 50px;
        `;
    }

    if (size === 'medium') {
        return `
           width: 150px; 
           height: 150px;
        `;
    }

    if (size === 'large') {
        return `
           width: 400px; 
           height: 400pxpx;
        `;
    }

    return `
       width: 100px; 
       height: 100px;
    `;
}


export const Img = styled.img`
    height: auto; 
    width: auto; 
    ${({ size }) => sizeImg(size)}
`;
