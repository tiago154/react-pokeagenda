import styled from 'styled-components'

interface IPropsStyled {
  background: string;
}

const backgroundPokemon = (name: string) => {
  if (name === 'Normal') {
    return `
            background: linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
            background-color: #a4acaf;
            color: #212121;
        `
  }

  if (name === 'Lutador') {
    return `
            background: linear-gradient(180deg, #d56723 50%, #d56723 50%);
            background-color: #d56723;
            color: #fff;
        `
  }

  if (name === 'Voador') {
    return `
            background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
            background-color: #3dc7ef;
            color: #212121;
        `
  }

  if (name === 'Venenoso') {
    return `
            background: linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
            background-color: #b97fc9;
            color: #fff;
        `
  }

  if (name === 'Terra') {
    return `
            background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
            background-color: #f7de3f;
            color: #562e05;
        `
  }

  if (name === 'Pedra') {
    return `
            background: linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
            background-color: #a38c21;
            color: #fff;
        `
  }

  if (name === 'Inseto') {
    return `
            background: linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
            background-color: #729f3f;
            color: #fff;
        `
  }

  if (name === 'Fantasma') {
    return `
            background: linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
            background-color: #7b62a3;
            color: #fff;
        `
  }

  if (name === 'Metálico') {
    return `
            background: linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
            background-color: #9eb7b8;
            color: #212121;
        `
  }

  if (name === 'Fogo') {
    return `
            background: linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
            background-color: #fd7d24;
            color: #fff;
        `
  }

  if (name === 'Água') {
    return `
            background: linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
            background-color: #4592c4;
            color: #fff;
        `
  }

  if (name === 'Planta') {
    return `
            background: linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
            background-color: #9bcc50;
            color: #212121;
        `
  }

  if (name === 'Elétrico') {
    return `
            background: linear-gradient(180deg, #eed535 50%, #eed535 50%);
            background-color: #eed535;
            color: #212121;
        `
  }

  if (name === 'Psíquico') {
    return `
            background: linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
            background-color: #f366b9;
            color: #212121;
        `
  }

  if (name === 'Gelo') {
    return `
            background: linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
            background-color: #51c4e7;
            color: #212121;
        `
  }

  if (name === 'Dragão') {
    return `
            background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
            background-color: #53a4cf;
            color: #fff;
        `
  }

  if (name === 'Noturno') {
    return `
            background: linear-gradient(180deg, #707070 50%, #707070 50%);
            background-color: #707070;
            color: #fff;
        `
  }

  if (name === 'Fada') {
    return `
            background: linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
            background-color: #fdb9e9;
            color: #212121;
        `
  }
}

export const QuadrupleDamageMessage = styled.div`
  opacity: 0;
  visibility: hidden;
  max-width: 340px;
  top: -100px;
  right: 72px;
  width: max-content;
  box-shadow: 1px 1px 1px 1px #313131;
  background-color: #616161;
  border-radius: 5px;
  color: #fff;
  padding: 1.5em;
  position: relative;
  text-align: center;
  z-index: 100;
  transition: opacity .4s linear, visibility .4s linear;
  &:after {
    bottom: -10px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #616161;
    content: '';
    height: 0;
    left: 50%;
    margin-left: -10px;
    position: absolute;
    width: 0;
    z-index: 2;
  }
`

export const QuadrupleDamage = styled.i`
  border-radius: 8px;
  background-color: #616161;
  top: 0;
  right: 2px;
  height: 16px;
  vertical-align: middle;
  width: 16px;
  margin-left: 8px;
  cursor: help;
  &:before {
    content: "*";
    color: #fff;
    font-family: sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 100;
    left: 4px;
    top: 2px;
  }
  :hover {
    div {
      visibility: visible;
      opacity: 1;
    }
  }
`

const TypePokemon = styled.span`
    display: flex;
    border-radius: 6px;
    padding: 5px;
    font-weight: bold;
    border: 2px;
    width: auto;
    height: auto;
    text-align: center;
    justify-content: center;
    ${({ background }: IPropsStyled) => backgroundPokemon(background)}
`

export default TypePokemon
