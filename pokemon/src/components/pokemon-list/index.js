import React, { Component } from 'react';

const urlPokeApi = process.env.REACT_APP_POKEMON_API;
const LIMIT = 15;

const calculateOffSet = (offset, limit, forward) => {
  if (offset === 0 && !forward) return offset;
  return forward ? offset + limit : offset - limit;
}

class PokemonList extends Component {
  state = {
    pokemons: [],
    offSet: 0,
  };

  async getPokemons(url, limit, offset, forward = false) {
    this.setState({ loading: true }); // Carregando informações
    const urlRequest = `${url}?limit=${limit}&offset=${calculateOffSet(offset, limit, forward)}`;

    const response = await fetch(urlRequest);
    const json = await response.json();

    if (json.results.length) {
      this.setState({
        offSet: calculateOffSet(offset, limit, forward),
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

    this.setState({ loading: false }); // Finalizou
  }

  componentDidMount() {
    this.getPokemons(urlPokeApi, LIMIT, this.state.offSet);
  }

  render() {
    const pokemons = this.state.pokemons;

    const fillPokemon = pokemon => (
      <tr key={pokemon.number}>
        <td>
          <button
            className='Button-style'
            onClick={() => this.props.handlerInformation(pokemon.url)}>
            {pokemon.number}
          </button>
        </td>
        <td>
          <button
            className='Button-style Button-name'
            onClick={() => this.props.handlerInformation(pokemon.url)}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </button>
        </td>
      </tr>
    )

    return (
      <aside className=''>
        <table className='Table-name-pokemon'>
          <thead>
            <tr>
              <th className='Table-head'>#</th>
              <th className='Table-head'>Name</th>
            </tr>
          </thead>
          <tbody>{pokemons.map(fillPokemon)}</tbody>
        </table>
        <div className=''>
          <button className='Button-controls' onClick={() => this.getPokemons(urlPokeApi, LIMIT, this.state.offSet)}>{'<'}</button>
          <button className='Button-controls' onClick={() => this.getPokemons(urlPokeApi, LIMIT, this.state.offSet, true)}>{'>'}</button>
        </div>
      </aside >
    )
  }
}

export default PokemonList
