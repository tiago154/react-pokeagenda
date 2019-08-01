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
        font: 14px 'Roboto', sans-serif;
        background: #f3f0ee;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`;

export const Button = styled.button`
    background: #ffcc03;
    color: #3537b3;
    border-radius: 5px;
    border: 2px solid #3537b3;
    padding: .2rem .1rem;
    font-weight: bold;

    :hover {
        background: #3537b3;
    }

    :focus {
        outline: none;
    }
`;

export const Label = styled.label`
    color: ${props => `${props.color}`};
    font-weight: bold;
`;
