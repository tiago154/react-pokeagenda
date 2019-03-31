import React, { Component } from 'react';
import './pokemon-list.css';

const urlPokeApi = process.env.REACT_APP_POKEMON_API;

class PokemonList extends Component {
  state = {
    pokemons: [],
    previous: '',
    next: '',
    limit: 15
  };

  async getPokemons(url) {
    const urlRequest = url || `${urlPokeApi}?limit=${this.state.limit}&offset=${0}`;
    const response = await fetch(urlRequest);
    const json = await response.json();
    this.setState({
      previous: json.previous,
      next: json.next,
      pokemons: json.results.map(item => {
        const number = item.url.split('pokemon/')[1].replace('/', '');
        return {
          number: number,
          name: item.name,
          url: item.url
        }
      })
    });
  }

  componentDidMount() {
    this.getPokemons();
  }

  render() {
    const pokemons = this.state.pokemons || [];

    const fillPokemon = pokemon => (
      <tr key={pokemon.number}>
        <td>
          <button
            className='Button-style'
            onClick={() => this.props.handlerInformation(pokemon.name, pokemon.url)}>
            {pokemon.number}
          </button>
        </td>
        <td>
          <button
            className='Button-style Button-name'
            onClick={() => this.props.handlerInformation(pokemon.name, pokemon.url)}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </button>
        </td>
      </tr>
    )

    return (
      <aside className='Flex Flex-column Table-list'>
        <table className='Table-name-pokemon'>
          <thead>
            <tr>
              <th className='Table-head'>#</th>
              <th className='Table-head'>Name</th>
            </tr>
          </thead>
          <tbody>{pokemons.map(fillPokemon)}</tbody>
        </table>
        <div className='Flex Flex-row Flex-space-around'>
          <button className='Button-controls' onClick={() => this.getPokemons(this.state.previous)}>{'<'}</button>
          <button className='Button-controls' onClick={() => this.getPokemons(this.state.next)}>{'>'}</button>
        </div>
      </aside >
    )
  }
}

export default PokemonList
