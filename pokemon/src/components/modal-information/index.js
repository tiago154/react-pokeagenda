import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import { Img, Title } from '../../styles/global';
import { Container, ContainerInformation, ContainerImagePokemon, ContainerTitle } from './styles';
import PokemonInformation from '../pokemon-information';
import PokemonEvolution from '../pokemon-evolution';
import PokemonTypes from '../pokemon-types';
import { typesMap } from '../../helpers/pokemon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokedexActions from '../../store/actions/pokedex';
import defaultImage from '../../assets/images/default-pokemon.png';

const urlPokemonImage = process.env.REACT_APP_POKEMON_IMAGE;

const errorMainImageDefault = e => {
    e.target.onerror = null;
    e.target.src = `${defaultImage}`;
}

const ModalInformation = ({ showModal, pokemon, updatePokemonModal, toggleModal }) => {
    // @TODO Colocar imagem fisicamente no projeto
    const closePicture = 'https://cdn3.iconfinder.com/data/icons/interface/100/close_button_2-512.png';

    let mainPicture = '';
    let name = '';
    let number = '';
    let types = [];

    // @TODO Refatorar
    if (showModal && pokemon.data && pokemon.data.id) {
        mainPicture = `${urlPokemonImage}${pokemon.data.id.toString().padStart(3, '0')}.png`;
        name = pokemon.data.species.name.charAt(0).toUpperCase() + pokemon.data.species.name.slice(1);
        number = pokemon.data.id.toString().padStart(3, '0');
        types = pokemon.data.types.map(typesMap);
    };

    const closeModal = async () => {
        await updatePokemonModal({});
        toggleModal(false);
    };

    return (
        <Container showModalInformation={showModal}>
            <ContainerInformation>
                <Grid fluid style={{ height: '100%' }}>
                    <ContainerTitle>
                        <Title>{name} - {number}</Title>
                        <Img size={50} src={closePicture} onClick={() => closeModal()} />
                    </ContainerTitle>
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={5}>
                            <ContainerImagePokemon>
                                <Img src={mainPicture} onError={errorMainImageDefault} />
                                <PokemonTypes types={types} />
                            </ContainerImagePokemon>
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={7}>
                            <PokemonInformation pokemon={pokemon} />
                        </Col>
                    </Row>
                    <PokemonEvolution evolutions={pokemon.evolutions} />
                </Grid>
            </ContainerInformation>
        </Container >
    )
}

const mapStateToProps = state => ({
    showModal: state.pokedex.showModal
});

const mapDispatchToProps = dispatch => bindActionCreators(pokedexActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ModalInformation);