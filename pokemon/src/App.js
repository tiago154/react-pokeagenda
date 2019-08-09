import React, { Component } from 'react';
import Header from './components/header';
import { Grid, Row } from 'react-flexbox-grid';
import * as dotenv from 'dotenv';
import pokemonTypes from './components/pokemon-information/types-pokemon';
import SearchInput from './components/search';
import { GlobalStyled } from './styles/global';
import { getPokemon, paginatePokemon } from './services/pokemon-api';
import Board from './components/board';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import ModalInformation from './components/modal-information';
import 'react-toastify/dist/ReactToastify.css';

dotenv.config();

const LIMIT = 50;

class App extends Component {
  state = {
    pokemons: [],
    specificPokemon: {},
    limit: LIMIT,
    offSet: 0,
    isLoading: false,
    searchByName: '',
    showModal: false,
  };

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  updateOffSet = async value => await this.setState({ offSet: value });

  updateSpecificPokemon = async pokemon => await this.setState({ specificPokemon: pokemon });

  loadList = async (forward = false) => {
    const lessLimit = (this.state.pokemons.length < this.state.limit);

    const updatedOffSet = this.calculateOffSet(this.state.offSet, this.state.limit, forward, lessLimit);

    await this.updateOffSet(updatedOffSet);

    if (this.state.pokemons.length === 0 || (forward && !lessLimit) || !forward) {
      this.setState({ isLoading: true });

      const list = await paginatePokemon(this.state.limit, this.state.offSet);

      this.validateListPokemon(list);
    }

    this.setState({ isLoading: false });
  };

  calculateOffSet = (offSet, limit, forward, lessLimit) => {
    if (offSet === 0 && !forward) return offSet;
    if (lessLimit && forward) return offSet;
    return forward ? (offSet + limit) : (offSet - limit);
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
    if (!name) return;
    this.setState({ isLoading: true });
    this.setState({ specificPokemon: {} });

    const response = await getPokemon(name);

    this.setState({ specificPokemon: response });
    this.setState({ isLoading: false });

    if (!response) {
      toast('🦓 Pokemon Não Localizado', {
        position: "top-center",
        autoClose: 2000,
        transition: Zoom,
        pauseOnHover: false
      });

      this.setState({ searchByName: '' });
    }
  }

  componentDidMount() {
    this.loadList(false);
  }

  render() {
    const { searchByName, pokemons, isLoading, specificPokemon, limit, offSet, showModal } = this.state;
    const { changeInputEvent, keyPressEnter, specificSearchByName, loadList, toggleModal, updateSpecificPokemon } = this;
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
        <Grid fluid>
          <Row>
            <ModalInformation
              showModal={showModal}
              toggleModal={toggleModal}
              pokemon={specificPokemon}
              updateSpecificPokemon={updateSpecificPokemon}
            />
          </Row>
          <Row center='xs'>
            <Board
              list={pokemons}
              isLoading={isLoading}
              pokemon={specificPokemon}
              loadList={loadList}
              limit={limit}
              offSet={offSet}
              toggleModal={toggleModal}
              updateSpecificPokemon={updateSpecificPokemon}
            />
          </Row>
        </Grid>
        <ToastContainer />
        <GlobalStyled hiddenOverFlowY={showModal} />
      </>
    )
  }
}

export default App;
