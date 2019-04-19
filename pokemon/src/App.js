import React, { Component } from 'react';
import Header from './components/header';
import PokemonList from './components/pokemon-list';
import PokemonImage from './components/pokemon-image';
import './App.css';
import * as dotenv from 'dotenv';
import PokemonInformation from './components/pokemon-information';
import pokemonTypes from './components/pokemon-information/types-pokemon';

dotenv.config();

class App extends Component {
  state = {
    image: process.env.REACT_APP_DEFAULT_IMAGE,
    id: 0,
    name: 'Unknown',
    informations: {
      weight: 0,
      height: 0,
      types: []
    },
    sprites: {
      front: '',
      frontShiny: '',
      back: '',
      backShiny: ''
    }
  };

  loadInformation = async (name, url) => {
    const response = await fetch(url);
    const json = await response.json();
    this.setState({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      id: json.id,
      informations: {
        weight: (json.weight / 10).toLocaleString('pt-br'),
        height: (json.height / 10).toLocaleString('pt-br'),
        types: json.types.map(this.typesMap)
      },
      sprites: {
        front: json.sprites.front_default,
        frontShiny: json.sprites.front_shiny,
        back: json.sprites.back_default,
        backShiny: json.sprites.back_shiny
      }
    });
  }

  typesMap = type => {
    const pokemonType = pokemonTypes[type.type.name];
    const nameType = pokemonType ? pokemonType.name : '';
    const classNameType = pokemonType ? pokemonType.className : 'Unknown-background';
    return {
      slot: type.slot,
      name: nameType,
      className: classNameType
    };
  }

  render() {
    return (
      <div className='Flex Flex-column'>
        <Header />
        <div className='Flex Width-full Flex-space-between'>
          <PokemonList handlerInformation={this.loadInformation} />
          <div className='Flex Flex-row Container-pokemon-information'>
            <PokemonImage name={this.state.name} sprites={this.state.sprites} id={this.state.id} />
            <PokemonInformation informations={this.state.informations} />
          </div>
        </div>
        <footer className='Flex Width-full Flex-center'>
        </footer>
      </div >
    )
  }
}

export default App;
