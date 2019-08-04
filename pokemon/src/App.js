import React, { Component } from 'react';
import Header from './components/header';
import { Grid, Row } from 'react-flexbox-grid';
import * as dotenv from 'dotenv';
import pokemonTypes from './components/pokemon-information/types-pokemon';
import SearchInput from './components/search';
import { GlobalStyled } from './styles/global';
import { getPokemon, paginatePokemon } from './services/pokemon-api';
import Board from './components/board';

dotenv.config();

class App extends Component {
  state = {
    pokemons: [],
    specificPokemon: {},
    limit: 0,
    offSet: 0,
    isLoading: false,
    searchByName: ''
  };

  loadList = async (limit = 28, offSet = 0) => {
    this.setState({ isLoading: true });
    const list = await paginatePokemon(limit, offSet);

    this.validateListPokemon(list);

    this.setState({ isLoading: false });
  };

  validateListPokemon = data => {
    if (data.results && data.results.length) {
      this.setState({
        pokemons: data.results.map(this.fillPokemon)
      });
    };
  };

  fillPokemon = item => {
    const id = item.url.split('pokemon/')[1].replace('/', '');
    return {
      id,
      name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
      url: item.url
    }
  };

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
  changeInputEvent = event => {

    this.setState({
      searchByName: event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    });

    if (!event.target.value) {
      this.setState({
        specificPokemon: {}
      });
    }
  }

  // OK
  keyPressEnter = pokemonName => event => {
    event.key === 'Enter' && this.specificSearchByName(pokemonName);
  }


  // updatePokemonData = json => {
  //   this.setState({
  //     name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
  //     id: json.id,
  //     // informations: {
  //     //   weight: (json.weight / 10).toLocaleString('pt-br'),
  //     //   height: (json.height / 10).toLocaleString('pt-br'),
  //     //   stats: json.stats.map(this.statsMap),
  //     //   types: json.types.map(this.typesMap)
  //     // },
  //     // sprites: {
  //     //   front: json.sprites.front_default,
  //     //   frontShiny: json.sprites.front_shiny,
  //     //   back: json.sprites.back_default,
  //     //   backShiny: json.sprites.back_shiny
  //     // }
  //   });
  // }

  specificSearchByName = async name => {
    if (!name) return '';
    this.setState({ specificPokemon: {} });
    this.setState({ isLoading: true });
    const response = await getPokemon(name);
    this.setState({ specificPokemon: response });
    this.setState({ isLoading: false });
  }

  componentDidMount() {
    this.loadList();
  }

  render() {
    const { searchByName, pokemons, isLoading, specificPokemon } = this.state;
    const { changeInputEvent, keyPressEnter, specificSearchByName } = this;
    return (
      <>
        <Row>
          <Header />
        </Row>
        <Row center='xs'>
          <SearchInput value={searchByName}
            onChange={changeInputEvent}
            onKeyPress={keyPressEnter(searchByName)}
            onSubmit={() => specificSearchByName(searchByName)}
          />
        </Row>
        <Grid>
          <Row center='xs'>
            <Board list={pokemons} isLoading={isLoading} pokemon={specificPokemon} />
          </Row>
        </Grid>
        <GlobalStyled />
      </>
    )
  }
}

export default App;
