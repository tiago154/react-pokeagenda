import React, { Component } from 'react'

class PokemonList extends Component {
  render() {
    const pokemons = this.props.pokemons || [];

    const fillPokemon = pokemon => (
      <tr>
        <td>{pokemon.url.split('pokemon/')[1].replace('/','')}</td>
        <td>{pokemon.name}</td>
        <td>{pokemon.url}</td>
      </tr>
    )

    return (
      <div>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Url</th>
          </tr>
          {pokemons.map(fillPokemon)}
        </table>
      </div>
    )
  }
}

export default PokemonList
