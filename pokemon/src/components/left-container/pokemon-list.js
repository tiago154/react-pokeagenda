import React, { Component } from 'react';
import './pokemon-list.css';

const urlPokeApi = 'https://pokeapi.co/api/v2/pokemon';
const urlPokeImage = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

class PokemonList extends Component {
  state = {
    pokemons: [],
    previous: '',
    next: ''
  };

  async getPokemons(url) {
    const urlRequest = url || `${urlPokeApi}?limit=${15}&offset=${0}`;
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
          image: `${urlPokeImage}${number.padStart(3, '0')}.png`,
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
        <td>{pokemon.number}</td>
        <td>
          <button onClick={() => this.props.handlerInformation(pokemon.image, pokemon.name)}>
            {pokemon.name}
          </button>
        </td>
      </tr>
    )

    return (
      <div className='Left-menu'>
        <table className='Table-name-pokemon'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{pokemons.map(fillPokemon)}</tbody>
        </table>
        <div>
          <button onClick={() => this.getPokemons(this.state.previous)}>Anterior</button>
          <button onClick={() => this.getPokemons(this.state.next)}>Próximo</button>
        </div>
      </div >
    )
  }
}

export default PokemonList
