import React, { Component } from 'react'
import Title from './components/header/title'
import PokemonList from './components/left-menu/pokemon-list'
import './App.css'

class App extends Component {
  state = {
    pokemons: []
  };

  async getPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15');
    const json = await response.json();
    console.log(json);
    this.setState({
      pokemons: json.results.map(item => {
        return {
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
    return (
      <div>
        <Title className='Title' />
        <PokemonList
          pokemons={this.state.pokemons}
        />
      </div>
    )
  }
}

export default App
