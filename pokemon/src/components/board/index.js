import React, { Component } from 'react';
import { ButtonContainer, CardContainer, Container } from './styles';
import Card from '../card';
import loader from '../../assets/images/charizard-loader.gif';
import { Img, Button } from '../../styles/global';
import { connect } from 'react-redux';


class Board extends Component {
    render() {
        const { list, loading, pokemon, loadList, updatePokemonModal } = this.props;
        console.log('BOARD: ', loading);
        const fillPokemon = pokemon =>
            (<Card
                key={pokemon.id}
                pokemon={pokemon}
                updatePokemonModal={updatePokemonModal}
            />);

        const renderList = list => !loading && list && list.map(fillPokemon);

        const renderPokemon = pokemon =>
            !loading && pokemon && pokemon.id &&
            <Card
                key={pokemon.id}
                pokemon={pokemon}
                updatePokemonModal={updatePokemonModal}
            />;

        const changePage = async forward => await loadList(forward);

        const renderButtonPaginate = pokemon => {
            if (loading || (pokemon && pokemon.id))
                return;

            return (
                <ButtonContainer>
                    <Button onClick={() => changePage(false)}>{'<'} Anterior</Button>
                    <Button onClick={() => changePage(true)}>Próxima {'>'}</Button>
                </ButtonContainer>
            );
        }

        return (
            <Container>
                <CardContainer>
                    {loading && (<Img src={loader} alt={'Loading'} size={100} />)}
                    {pokemon && pokemon.id ? renderPokemon(pokemon) : renderList(list)}
                </CardContainer>
                {renderButtonPaginate(pokemon)}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.pokedex.loading
});

export default connect(mapStateToProps)(Board);