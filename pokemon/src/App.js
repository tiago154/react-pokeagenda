import React, { Component } from 'react';
import Header from './components/header';
import { Grid, Row } from 'react-flexbox-grid';
import * as dotenv from 'dotenv';
import SearchInput from './components/search';
import { GlobalStyled } from './styles/global';
import Board from './components/board';
import { ToastContainer } from 'react-toastify';
import ModalInformation from './components/modal-information';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokedexActions from './store/actions/pokedex';
import 'react-toastify/dist/ReactToastify.css';

dotenv.config();

class App extends Component {
  render() {
    const { showModal } = this.props;
    return (
      <>
        <Row>
          <Header />
        </Row>
        <Row center='xs'>
          <SearchInput />
        </Row>
        <Grid fluid>
          <Row center='xs'>
            <Board />
          </Row>
          <Row>
            <ModalInformation />
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
  loading: state.pokedex.loading,
  limit: state.pokedex.limit
});

const mapDispatchToProps = dispatch => bindActionCreators(pokedexActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(App);
