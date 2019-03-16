import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pokemons from './pokemon.json';

class ButtonLink extends Component {
  render() {
    const { text, link } = this.props;
    return (
      <button>
        <a className="App-link" href={link} target="_blank" rel="noopener noreferrer">{text}</a>
      </button>
    );
  }
}

class Title extends Component {
  render() {
    const text = this.props.text || 'Hello World';
    return (
      <h1>{text}</h1>
    );
  }
}

class Pokemon extends Component {
  render() {
    const { name, image } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <img src={image} alt={name} title={name} />
      </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: {}
    };
  }

  tick() {
    this.setState({
      pokemon: pokemons[Math.floor(Math.random() * pokemons.length)]
    });
  }
  componentDidMount() {
    setInterval(() => this.tick(), 4000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
          <Pokemon name={this.state.pokemon.name} image={this.state.pokemon.image} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ButtonLink text="Google" link="https://www.google.com.br/" />
          <ButtonLink text="Dextra" link="https://dextra.com.br/pt/" />
        </header>
      </div>
    );
  }
}

export default App;
