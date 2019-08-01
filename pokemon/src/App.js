import React, { Component } from 'react';
import Header from './components/header';
import PokemonImage from './components/pokemon-image';
import { Grid, Row, Col } from 'react-flexbox-grid';
import * as dotenv from 'dotenv';
import PokemonInformation from './components/pokemon-information';
import pokemonTypes from './components/pokemon-information/types-pokemon';
import SearchInput from './components/search';
import { GlobalStyled } from './styles/global';
import { paginatePokemon, getPokemon } from './services/pokemon-api';

dotenv.config();

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
    const teste = await paginatePokemon(5, 0);
    console.log(teste);
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

  capitalizeFirstLetter = event => {
    this.setState({
      searchByName: event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    });
  }

  keyPressEnter = pokemonName => event => {
    event.key === 'Enter' && this.specificSearchByName(pokemonName);
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

  specificSearchByName = async name => {
    if (!name) return '';
    const response = await getPokemon(name)
    if (response) {
      this.updatePokemonData(response);
    }
  }

  render() {
    const { searchByName, id, name, sprites, informations } = this.state;
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
          <Row center='xs' middle='xs'>
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
        <GlobalStyled />
      </>
    )
  }
}

export default App;
