import React, { Component } from 'react';
import Header from './components/header';
import { Grid, Row } from 'react-flexbox-grid';
import * as dotenv from 'dotenv';
import pokemonTypes from './components/pokemon-information/types-pokemon';
import SearchInput from './components/search';
import { GlobalStyled } from './styles/global';
import { getPokemon } from './services/pokemon-api';
import Board from './components/board';

dotenv.config();

class App extends Component {
  state = {
    searchByName: ''
  };

  loadList = async url => {
    const response = await fetch(url);
    const json = await response.json();
    this.updatePokemonData(json);
  }

  // OK
  typesMap = type => {
    const pokemonType = pokemonTypes[type.type.name];
    const nameType = pokemonType ? pokemonType.name : '';
    return {
      slot: type.slot,
      name: nameType
    };
  }

  // OK
  statsMap = stat => {
    return {
      name: stat.stat.name,
      value: stat.base_stat
    }
  }

  // OK
  capitalizeFirstLetter = event => {
    this.setState({
      searchByName: event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    });
  }

  // OK
  keyPressEnter = pokemonName => event => {
    event.key === 'Enter' && this.specificSearchByName(pokemonName);
  }


  updatePokemonData = json => {
    this.setState({
      name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
      id: json.id,
      // informations: {
      //   weight: (json.weight / 10).toLocaleString('pt-br'),
      //   height: (json.height / 10).toLocaleString('pt-br'),
      //   stats: json.stats.map(this.statsMap),
      //   types: json.types.map(this.typesMap)
      // },
      // sprites: {
      //   front: json.sprites.front_default,
      //   frontShiny: json.sprites.front_shiny,
      //   back: json.sprites.back_default,
      //   backShiny: json.sprites.back_shiny
      // }
    });
  }

  specificSearchByName = async name => {
    if (!name) return '';
    const response = await getPokemon(name)
    if (response) {
      this.updatePokemonData(response);
    }
  }

  render() {
    const { searchByName } = this.state;
    const { capitalizeFirstLetter, keyPressEnter, specificSearchByName } = this;
    return (
      <>
        <Row>
          <Header />
        </Row>
        <Row center='xs'>
          <SearchInput value={searchByName}
            onChange={capitalizeFirstLetter}
            onKeyPress={keyPressEnter(searchByName)}
            onSubmit={() => specificSearchByName(searchByName)}
          />
        </Row>
        <Grid>
          <Row center='xs'>
            <Board />
          </Row>
        </Grid>
        <GlobalStyled />
      </>
    )
  }
}

export default App;
