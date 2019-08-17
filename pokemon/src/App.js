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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokedexActions from './store/actions/pokedex';
import 'react-toastify/dist/ReactToastify.css';

dotenv.config();

const LIMIT = 500;

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
    searchByName: ''
  };

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

  loadList = async (forward = false) => {
    const lessLimit = (this.state.pokemons.length < this.state.limit);

    const updatedOffSet = this.calculateOffSet(this.props.offSet, this.state.limit, forward, lessLimit);
 
    await this.props.updateOffSet(updatedOffSet);

    if (this.state.pokemons.length === 0 || (forward && !lessLimit) || !forward) {
      await this.props.updateLoading(true);

      const list = await paginatePokemon(this.state.limit, this.props.offSet);

      this.validateListPokemon(list);
    }

    await this.props.updateLoading(false);
  };

  calculateOffSet = (offSet, limit, forward, lessLimit) => {
    if (offSet === 0 && !forward) return offSet;
    if (lessLimit && forward) return offSet;
    return forward ? (offSet + limit) : (offSet - limit);
  };

  validateListPokemon = data => {
    if (data.results && data.results.length) {
      this.setState({
        pokemons: data.results
          .filter(i => i.url.split('pokemon/')[1].replace('/', '') < 808).map(fillPokemon)
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
    await this.props.updateLoading(true);
    this.setState({ specificPokemon: {} });

    const response = await getPokemon(name);

    this.setState({ specificPokemon: response });
    await this.props.updateLoading(false);

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
      searchByName, pokemons,
      specificPokemon, pokemonModal
    } = this.state;
    const { showModal } = this.props;
    const {
      changeInputEvent, keyPressEnter, specificSearchByName,
      loadList, updatePokemonModal
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
              pokemon={specificPokemon}
              loadList={loadList}
              updatePokemonModal={updatePokemonModal}
            />
          </Row>
          <Row>
            <ModalInformation
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

const mapStateToProps = state => ({
  showModal: state.pokedex.showModal,
  offSet: state.pokedex.offSet,
  loading: state.pokedex.loading
});

const mapDispatchToProps = dispatch => bindActionCreators(pokedexActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(App);
