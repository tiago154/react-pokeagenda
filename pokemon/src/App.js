import React, { Component } from 'react';
import Header from './components/header';
import { Grid, Row } from 'react-flexbox-grid';
import * as dotenv from 'dotenv';
import SearchInput from './components/search';
import { GlobalStyled } from './styles/global';
import { getPokemon, paginatePokemon } from './services/pokemon-api';
import Board from './components/board';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import ModalInformation from './components/modal-information';
import { fillPokemon } from './helpers/pokemon';
import 'react-toastify/dist/ReactToastify.css';

dotenv.config();

const LIMIT = 50;

class App extends Component {
  state = {
    pokemons: [],
    specificPokemon: {},
    pokemonModal: {
      data: {},
      evolutions: {},
      description: '',
      abilities: []
    },
    limit: LIMIT,
    offSet: 0,
    isLoading: false,
    searchByName: '',
    showModal: false,
  };

  toggleModal = value => this.setState({ showModal: value });

  updateOffSet = async value => await this.setState({ offSet: value });

  updateSpecificPokemon = async pokemon => await this.setState({ specificPokemon: pokemon });

  updatePokemonModal = async (data, evolutions = {}, description = '', abilities = {}, category = '') =>
      await this.setState({
        pokemonModal: {
          data,
          evolutions,
          description,
          abilities,
          category
        }
      });

  updateLoading = async value => await this.setState({ isLoading: value });

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
        pokemons: data.results.map(fillPokemon)
      });
    };
  };

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

  keyPressEnter = pokemonName => event => {
    event.key === 'Enter' && this.specificSearchByName(pokemonName);
  }

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
    const {
      searchByName, pokemons, isLoading,
      specificPokemon, limit, offSet,
      showModal, pokemonModal
    } = this.state;
    const {
      changeInputEvent, keyPressEnter, specificSearchByName,
      loadList, toggleModal, updateLoading, updatePokemonModal
    } = this;
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
          <Row center='xs'>
            <Board
              list={pokemons}
              isLoading={isLoading}
              pokemon={specificPokemon}
              loadList={loadList}
              limit={limit}
              offSet={offSet}
              toggleModal={toggleModal}
              updatePokemonModal={updatePokemonModal}
              updateLoading={updateLoading}
            />
          </Row>
          <Row>
            <ModalInformation
              showModal={showModal}
              toggleModal={toggleModal}
              pokemon={pokemonModal}
              updatePokemonModal={updatePokemonModal}
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
