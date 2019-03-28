import React, { Component } from 'react';
import Header from './components/header';
import PokemonList from './components/pokemon-list';
import PokemonImage from './components/pokemon-image';
import './App.css';
import * as dotenv from 'dotenv';
import PokemonInformation from './components/pokemon-information';
dotenv.config();

class App extends Component {
  state = {
    image: process.env.REACT_APP_DEFAULT_IMAGE,
    name: 'Unknown',
    weight: '',
    sprites: {
      front: '',
      frontShiny: '',
      back: '',
      backShiny: ''
    }
  };


  async loadInformation(image, name, url) {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    this.setState({
      image,
      name,
      weight: json.weight,
      sprites: {
        front: json.sprites.front_default,
        frontShiny: json.sprites.front_shiny,
        back: json.sprites.back_default,
        backShiny: json.sprites.back_shiny
      }
    });
  }

  render() {
    return (
      <div className='Flex Flex-column'>
        <Header />
        <div className='Flex Width-100 Flex-space-around'>
          <PokemonList handlerInformation={this.loadInformation.bind(this)} />
          <PokemonImage image={this.state.image} name={this.state.name} />
          <PokemonInformation weight={this.state.weight} sprites={this.state.sprites} />
        </div>
        <footer className='Flex Width-100 Flex-Center'>
          <span>Parte de baixo</span>
        </footer>
      </div >
    )
  }
}

export default App;
