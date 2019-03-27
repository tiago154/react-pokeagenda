import React, { Component } from 'react';
import Title from './components/header/title';
import PokemonList from './components/pokemon-list';
import PokemonImage from './components/pokemon-image';
import './App.css';
import * as dotenv from 'dotenv';
dotenv.config();

class App extends Component {
  state = {
    image: process.env.REACT_APP_DEFAULT_IMAGE,
    name: 'Unknown'
  };


  loadInformation(image, name) {
    this.setState({
      image,
      name
    });
  }

  render() {
    return (
      <div className='App-container-block'>
        <Title />
        <div className='App-container-flex'>
          <PokemonList handlerInformation={this.loadInformation.bind(this)} />
          <PokemonImage image={this.state.image} name={this.state.name} />
        </div>
      </div>
    )
  }
}

export default App;
