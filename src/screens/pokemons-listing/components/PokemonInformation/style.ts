import styled from 'styled-components'

const BaseContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100vh;
  flex-direction: column;
  margin-right: 16px;
`

export const Container = styled<any>(BaseContainer)`
  background: rgba(236, 236, 236, 0.71);
  border: 3px solid #1F2FC1;
  box-sizing: border-box;
`

export const InitialContainer = styled<any>(BaseContainer)`
  align-items: center;
  justify-content: center;
`

export const TitleDiv = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const TitlePokemon = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
`

export const TitleType = styled.h4`
  font-family: 'Press Start 2P', cursive;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
`

export const TypesDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6%;
  div {
    margin: 6px 0px;
  }
`

export const TypePokemonDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const TypePokemonList = styled.div`
  display: flex;
  flex-direction: row;
  span {
    margin-right: 8px;
  }
`

export const WeaknessPokemonDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const WeaknessPokemonList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  span {
    flex-basis: 20%;
    margin-top: 4px;
    margin-right: 8px;
  }
`

export const ImageStyle = styled.div`
  margin-left: 6%;
`
