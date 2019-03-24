import React, { Component } from 'react';
import Title from './components/header/title';
import PokemonList from './components/left-container/pokemon-list';
import PokemonImage from './components/right-container/pokemon-image';
import './App.css';

class App extends Component {
  state = {
    image: 'http://img.ibxk.com.br/ns/quizpop/2015/03/10/10175754730000.png',
    name: 'Unknown'
  };


  loadImage(image, name) {
    this.setState({
      image,
      name
    });
  }

  render() {
    return (
      <div className='App-container-block'>
        <Title />
        <section className='App-container-flex'>
            <PokemonList handlerInformation={this.loadImage.bind(this)} />
            <PokemonImage image={this.state.image} name={this.state.name} />
        </section>
      </div>
    )
  }
}

export default App;
