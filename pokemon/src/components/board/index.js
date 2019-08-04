import React, { Component } from 'react';
import { Container } from './styles';
import Card from '../card';
import loader from '../../assets/images/loader.gif';

class Board extends Component {
    render() {
        const { list, isLoading, pokemon } = this.props;

        const fillPokemon = pokemon => (<Card key={pokemon.id} id={pokemon.id} name={pokemon.name} />);

        const renderList = list => {
            return !isLoading && list && list.map(fillPokemon);
        };

        const renderPokemon = pokemon => {
            return !isLoading && pokemon && pokemon.id && <Card key={pokemon.id} id={pokemon.id} name={pokemon.name} />;
        };

        return (
            <Container>
                {isLoading &&(<img src={loader} alt={'Loading'} />)}
                {pokemon && pokemon.id ?  renderPokemon(pokemon) : renderList(list)}
            </Container>
        );
    }
}

export default Board;