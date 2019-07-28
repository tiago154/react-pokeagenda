import React, { Component } from 'react';
import Header from './components/header';
import PokemonList from './components/pokemon-list';
import PokemonImage from './components/pokemon-image';
import { Grid, Row, Col } from 'react-flexbox-grid';
import * as dotenv from 'dotenv';
import PokemonInformation from './components/pokemon-information';
import pokemonTypes from './components/pokemon-information/types-pokemon';
import SearchInput from './components/search';
import { GlobalStyled } from './styles';

dotenv.config();

const urlPokeApi = process.env.REACT_APP_POKEMON_API

class App extends Component {
  state = {
    image: process.env.REACT_APP_DEFAULT_IMAGE,
    id: 0,
    name: 'Unknown',
    informations: {
      weight: 0,
      height: 0,
      types: [],
      stats: []
    },
    sprites: {
      front: '',
      frontShiny: '',
      back: '',
      backShiny: ''
    },
    searchByName: ''
  };

  loadList = async url => {
    const response = await fetch(url);
    const json = await response.json();
    this.updatePokemonData(json);
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

  statsMap = stat => {
    return {
      name: stat.stat.name,
      value: stat.base_stat
    }
  }

  updateSearchByName = event => {
    this.setState({
      searchByName: event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    });
  }

  updatePokemonData = json => {
    this.setState({
      name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
      id: json.id,
      informations: {
        weight: (json.weight / 10).toLocaleString('pt-br'),
        height: (json.height / 10).toLocaleString('pt-br'),
        stats: json.stats.map(this.statsMap),
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

  async specificSearchByName(url, name) {
    if (!name) return '';
    const urlRequest = `${url}/${name.toLowerCase()}`;
    const response = await fetch(urlRequest);
    if (response.status === 200) {
      const json = await response.json();
      this.updatePokemonData(json);
    }
  }

  render() {
    const { searchByName, id, name, sprites, informations } = this.state;
    return (
      <>
        <GlobalStyled />
        <Grid>
          <Row>
            <Header />
          </Row>
          <Row center='xs'>
            <SearchInput value={searchByName} onChange={this.updateSearchByName}
              onKeyPress={
                (e) => e.key === 'Enter' && this.specificSearchByName(urlPokeApi, searchByName)
              } onSubmit={() => this.specificSearchByName(urlPokeApi, searchByName)}
            />
          </Row>
          <Row center='xs' middle='xs'>
            <Col xs={12} md={3}>
              {
                searchByName.length < 1 &&
                <PokemonList handlerInformation={this.loadList} />
              }
            </Col>
            {
              !!id && (
                <>
                  <Col xs={12} md={6}>
                    <PokemonImage name={name} sprites={sprites} id={id} />
                  </Col>
                  <Col xs={12} md={3}>
                    <PokemonInformation informations={informations} />
                  </Col>
                </>
              )
            }
          </Row>
        </Grid>
      </>
    )
  }
}

export default App;
